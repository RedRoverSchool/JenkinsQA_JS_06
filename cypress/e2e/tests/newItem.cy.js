/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";

describe('newItem', () => {

    const homePage = new HomePage();
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
});
