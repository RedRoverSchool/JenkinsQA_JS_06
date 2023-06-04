/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import orgFolderConfigurePage from "../../fixtures/pom_fixtures/OrgFolderConfigurePage";

describe('newItem', () => {

    const homePage = new HomePage();

    it('AT_05.08.011 | Verify New Item Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemNamesList()
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
    
    it('AT_05.06_005| Create a new Organization Folder with description', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickOrgFolderDescriptionInputField()
            .typeOrgFolderDescriptionInputField(orgFolderConfigurePage.description)
            .clickSaveBtnAndGoOrgFolder()
            .getDescriptionCreatedOrgFolder()
            .should("have.text", orgFolderConfigurePage.description)
    });
});
