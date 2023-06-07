/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import folderPageData from "../../fixtures/pom_fixtures/folderPage.json";

describe('folder', () => {

    const homePage = new HomePage();
    
    it('AT_15.02.001 | Verify possibility to add folder description', () => {
        homePage
            .clickNewItemSideMenuLink()
            .selectFolderItem()
            .typeNewItemNameInputField(newItemPageData.folderName)
            .clickOkBtnAndGoFolderConfig()
            .clickSaveBtnAndGoFolder()
            .clickAddDescriptionBtn()
            .typeFolderDescription(folderPageData.folderDescription)
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderPageData.folderDescription);
    });

    it('AT_15.04_003 | Folder | Delete folder from dashboard', () => {
        cy.createFolderProject(newItemPageData.folderName);
        homePage
            .clickProjectDrpDwnBtn()
            .clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu()
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
    });
});
