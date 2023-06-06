/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import {folderName} from "../../fixtures/pom_fixtures/newItemPage.json";
import {folderDescription, folderNewDescription} from "../../fixtures/pom_fixtures/folderPage.json";

describe('folder', () => {

    const homePage = new HomePage();

    it('AT_15.02.001 | Verify possibility to add folder description', () => {
        homePage
            .clickNewItemSideMenuLink()
            .selectFolderItem()
            .typeNewItemNameInputField(folderName)
            .clickOkBtnAndGoFolderConfig()
            .clickSaveBtnAndGoFolder()
            .clickAddDescriptionBtn()
            .typeFolderDescription(folderDescription)
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderDescription);
    });

    it('AT_15.03.002 | Verify possibility to edit folder description', () => {
        homePage
            .clickNewItemSideMenuLink()
            .selectFolderItem()
            .typeNewItemNameInputField(folderName)
            .clickOkBtnAndGoFolderConfig()
            .clickSaveBtnAndGoFolder()
            .clickAddDescriptionBtn()
            .typeFolderDescription(folderDescription)
            .saveFolderDescription()   
            .clickEditDescriptionBtn()
            .typeFolderNewDescription(folderNewDescription) 
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderNewDescription);
    });
});
