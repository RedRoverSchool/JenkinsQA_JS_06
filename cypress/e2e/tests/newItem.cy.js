/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import errorMessage from "../../fixtures/pom_fixtures/errorPageData.json";
import ErrorMessagePage from "../../pageObjects/ErrorMessagePage"
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import orgFolderConfigurePage from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';

describe('newItem', () => {

    const homePage = new HomePage();
    const errorPage = new ErrorMessagePage();
    const dashboardBreadcrumbs = new DashboardBreadcrumbs();

    it('AT_05.08.011 | Verify New Item Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .createNewItemNamesList()
            .should('deep.equal', newItemPage.newItemNames);
    });

    it('AT_5.06_001| Create a new Organization Folder', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickSaveBtnAndGoOrgFolder()
            .clickGoToDashboard()
            .getMainPanel()
            .should('contain.text', newItemPage.orgFolderName);
    });


    newItemPage.newItemNames.forEach((newItemNames,idx) => {
        it(`AT_05.05_009 | Create a new ${newItemNames} using name with more then 255 valid characters`, () => {
            homePage
                .clickNewItemSideMenuLink()
                .typeNewItemNameInputField(newItemPage.character.repeat(newItemPage.number))
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
            .should('contain.text', newItemPage.warningMessage);
    });
  

    it('AT_05.05_004 Create a new Multibranch Pipeline using [+New Item]', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.multibranchPipelineName)
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
            .typeNewItemNameInputField(newItemPage.orgFolderName)
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
            .typeNewItemNameInputField(newItemPage.pipelineName)
            .selectPipelineItem()
            .clickOkBtnAndGoPipelineConfig()
            .clickSaveBtnAndGoPipeline()
            .clickGoToDashboard()
            .getMainPanel()
            .should('contain.text', newItemPage.pipelineName);
    });

    it('AT_02.04.004 | Homepage(Dashboard) | Verify "New Item" redirection', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemPageUrl()
            .should('include', newItemPage.newItemEndPoinURL)   
    });
});
