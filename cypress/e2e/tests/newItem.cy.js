/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";

describe('newItem', () => {

    const homePage = new HomePage();

    it('AT_05.08.011 | Verify New Item Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemNamesList()
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
});
