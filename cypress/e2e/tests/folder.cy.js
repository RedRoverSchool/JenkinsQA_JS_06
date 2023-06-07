/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {folderName} from "../../fixtures/pom_fixtures/newItemPage.json";
import {folderDescription} from "../../fixtures/pom_fixtures/folderPage.json";
import {freestyleProjectName} from "../../fixtures/pom_fixtures/newItemPage.json"

describe('folder', () => {

    const homePage = new HomePage();
    
    it.skip('AT_15.02.001 | Verify possibility to add folder description', () => {
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

    it.skip('AT_15.04_003 | Folder | Delete folder from dashboard', () => {
        cy.createFolderProject(folderName)
        homePage
            .clickProjectDrpDwnBtn()
            .clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu()
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_15.05.003| Verify user can create a new job inside a folder', () => {
        cy.createFolderProject(folderName);
        homePage
            .clickProjectNameLink()
            .clickCreateAJobLink()
            .typeNewItemNameInputField(freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFullProjectName()
            .should('contain', `${folderName}/${freestyleProjectName}`);
      });
});
