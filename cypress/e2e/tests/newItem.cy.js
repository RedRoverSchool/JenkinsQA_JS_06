/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import NewItemPage from "../../pageObjects/NewItemPage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import ErrorMessagePage from "../../pageObjects/ErrorMessagePage"
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import orgFolderConfigurePage from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe('newItem', () => {

    const homePage = new HomePage();
    const errorPage = new ErrorMessagePage();
    const dashboardBreadcrumbs = new DashboardBreadcrumbs();
    const headerAndFooter = new HeaderAndFooter
    const newItemPage = new NewItemPage();

    it('AT_05.08.011 | Verify New Item Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .createNewItemNamesList()
            .should('deep.equal', newItemPageData.newItemNames);
    });

    it('AT_5.06_001| Create a new Organization Folder', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickSaveBtnAndGoOrgFolder()
            .clickGoToDashboard()
            .getMainPanel()
            .should('contain.text', newItemPageData.orgFolderName);
    });


    newItemPageData.newItemNames.forEach((newItemNames,idx) => {
        it(`AT_05.05_009 | Create a new ${newItemNames} using name with more then 255 valid characters`, () => {
            homePage
                .clickNewItemSideMenuLink()
                .typeNewItemNameInputField(newItemPageData.character.repeat(newItemPageData.number))
                .clickEachItemsNameFromMenuListItem(idx)
                .clickOkBtnAndGoErrorPage()
            errorPage
                .verifyErrorMessageText()
        })
    })

    it('AT_5.06_003 | Create an Organization folder with an empty Item Name', () => {
        homePage
            .clickNewItemSideMenuLink()
            .selectOrgFolderItem()
            .getWarningMessage()
            .should('contain.text', newItemPageData.warningMessage);
    });
  
    it('AT_05.05_004 Create a new Multibranch Pipeline using [+New Item]', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickSaveBtnAndGoMultiPipeline();
            
        dashboardBreadcrumbs
            .clickDashboardLinkAndGoHomePage()
            .getProjectTable()
            .should('exist');    
    });

    it('AT_05.06_005| Create a new Organization Folder with description', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .addDescription(orgFolderConfigurePage.description)
            .clickSaveBtnAndGoOrgFolder()
            .getDescription()
            .should('contain.text', orgFolderConfigurePage.description);
    });
    
    it('AT_05.02_003 | Create a new Pipeline going from People page', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.pipelineName)
            .selectPipelineItem()
            .clickOkBtnAndGoPipelineConfig()
            .clickSaveBtnAndGoPipeline()
            .clickGoToDashboard()
            .getMainPanel()
            .should('contain.text', newItemPageData.pipelineName);
    });

    it('AT_05.07_004 | New item page has Input field for text data', () => {
        homePage
            .clickNewItemSideMenuLink()
            .verifyNewItemHeader(newItemPageData.newItemHeader)
            .getNewItemNameInputField()
            .should('have.attr', 'type', 'text')
    });        

    newItemPageData.newItemNames.forEach((newItemNames, idx) => {
        newItemPageData.specialCharactersArr.forEach((char) => {
            it(`AT_05.05_013 | Create a new ${newItemNames} using special characters ${char}`, () => {
                homePage
                    .clickNewItemSideMenuLink()
                    .clickEachItemsNameFromMenuListItem(idx)
                    .typeNewItemNameInputField(char)
                    .getErrorMessageForInvalidInput()
                    .should('contain', newItemPageData.specialCharactersMsg)
                    .and('be.visible');
            })
        })
    })

    it('AT_05.08_0006 | New Item page name in the header', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemPageTitle()
            .should('have.text', newItemPageData.newItemPageTitle)
    });

    newItemPageData.newItemNames.forEach((newItemNames, idx) => {
        it(`AT_05.07_005 | <New item>Input field Verify spases before and after the ${newItemNames} name are trimed when saving`, () => {
            const trimmedItemName=newItemPageData.newItemNamesWithSpaces[idx].trim()
            homePage
                .clickNewItemSideMenuLink()
                .clickEachItemsNameFromMenuListItem(idx)
                .typeNewItemNameInputField(newItemPageData.newItemNamesWithSpaces[idx])
                .clickOkBtnAndGoHomePage()
            headerAndFooter
                .clickJenkinsHomeLink()
                .getProjectNameLink()
                .should('have.text',trimmedItemName)                
        })        
    })

    it.only('AT_05.08.013 | Verify New Item type icons are visible', () => {
        homePage.clickNewItemSideMenuLink()
        newItemPage
            .getNewItemTypeIcons()
            .each(($el) => {
                cy.wrap($el).should('be.visible')
            })
    })    
});
