/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import ErrorMessagePage from "../../pageObjects/ErrorMessagePage"
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";

describe('newItem', () => {

    const homePage = new HomePage();
    const errorPage = new ErrorMessagePage();
    const dashboardBreadcrumbs = new DashboardBreadcrumbs();

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
});
