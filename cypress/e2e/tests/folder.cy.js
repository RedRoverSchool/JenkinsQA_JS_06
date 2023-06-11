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
            .clickAddEditDescriptionBtn()
            .typeFolderDescription(folderPageData.folderDescription)
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderPageData.folderDescription);
    });

    it('AT_15.04_003 | Folder | Delete folder from dashboard', () => {
        cy.createFolderProject(newItemPageData.folderName)
        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.folderName)
            .clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu()
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_15.05.003| Verify user can create a new job inside a folder', () => {
        cy.createFolderProject(newItemPageData.folderName);
        homePage
            .clickProjectNameLink(newItemPageData.folderName)
            .clickCreateAJobLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFullProjectName()
            .should('contain', `${newItemPageData.folderName}/${newItemPageData.freestyleProjectName}`);
      });

    it('AT_15.03.002 | Verify possibility to edit folder description', () => {
        cy.createFolderProject(newItemPageData.folderName);
        cy.addFolderDescription(folderPageData.folderDescription);
        homePage 
            .clickFolderNameLink(newItemPageData.folderName) 
            .clickAddEditDescriptionBtn()
            .typeFolderNewDescription(folderPageData.folderNewDescription) 
            .saveFolderDescription()
            .getFolderDescription().should('have.text', folderPageData.folderNewDescription);
    });

    it('AT_15.04.001 | <Folder>Delete folder within itself', () => {
        cy.createFolderProject(newItemPageData.folderName);
        homePage
            .clickFolderNameLink(newItemPageData.folderName)
            .clickDeleteFolderBtn()
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_15.06_03 | Folder>Rename Folder', () => {
        cy.createFolderProject(folderPageData.folderName)

        homePage
            .clickFolderNameLink(folderPageData.folderName)
            .clickRenameFolderLink()
            .typeFolderNewNameField(folderPageData.folderNewName)
            .clickFolderRenameBtn()
            .trimFolderHeaderName()
            .should('eq', folderPageData.folderNewName)
    })

});
