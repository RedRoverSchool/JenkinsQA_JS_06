/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
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
            .clickAddEditDescriptionBtn()
            .typeFolderDescription(folderDescription)
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderDescription);
    });

    it('AT_15.04_003 | Folder | Delete folder from dashboard', () => {
        cy.createFolderProject(folderName);
        homePage
            .clickProjectDrpDwnBtn()
            .clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu()
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_15.03.002 | Verify possibility to edit folder description', () => {
        cy.createFolderProject(folderName);
        cy.addFolderDescription(folderDescription);
        homePage 
            .clickFolderNameLink(folderName) 
            .clickAddEditDescriptionBtn()
            .typeFolderNewDescription(folderNewDescription) 
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderNewDescription);
    });
});
