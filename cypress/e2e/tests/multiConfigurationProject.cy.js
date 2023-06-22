/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json"
import multiConfProjectPageData from "../../fixtures/pom_fixtures/multiConfProjectPage.json";
import multiConfigurationProjectConfigurePage from "../../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json"
import MultiConfigurationProjectPage from "../../pageObjects/MultiConfigurationProjectPage";

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();
    const multiConfigurationProjectPage = new MultiConfigurationProjectPage();

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.07_002 | Delete Multi-configuration project on Dashboard with dropdown menu', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.06.003 | Rename Multi-configuration project with the current name', () =>{
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
            .selectRenameMultiConfProjectDrpDwnMenuBtn()
            .typeMultiConfProjectNameInputField(newItemPageData.multiConfigurationProjectName)
            .clickMultiConfProjectRenameBtn()
            .getCurrentNameMessage()
            .should('contain.text', multiConfProjectPageData.currentNameMsg)
    })

    it('AT_14.06.004 | Multi-configuration project>Rename Multi-configuration project', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
        .hoverProjectNameLink()
        .clickProjectDrpDwnBtn()
        .selectRenameMultiConfProjectDrpDwnMenuBtn()
        .typeMultiConfProjectNameInputField(newItemPageData.newMultiConfigurationProjectName)
        .clickRenameBtnMultiConfProject()
        .clickGoHome()
        .getNameMulticonfigProjectName()
        .should('have.text', newItemPageData.newMultiConfigurationProjectName)
    })

    it('AT_14.07.03 Delete Multi-configuration project within the selected project itself. ', () => {
        cy.createMultiConfigurationProject(newItemPageData.newMultiConfigurationProjectName);
        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.newMultiConfigurationProjectName)
        .clickDeleteMultiConfigurationProject()
        .getProjectTable()
        .should('not.exist');
    })

    it('AT_14.04_001 | Multi-configuration project verify adding description', () => {
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(newItemPageData.multiConfigurationProjectName)
        .selectMultiConfigurationProjectItem()
        .clickOkBtnAndGoMultiConfProjectConfig()
        .typeDescriptionInputField()
        .clickSaveButton()
        .getDescriptionField().should('have.text',multiConfigurationProjectConfigurePage.descriptionText);
    })

    it('AT_14.02_001 |MultiConfigurationProject | Verify that the user is able to Disable Project', () => {
        cy.createMultiConfigurationProject(newItemPage.multiConfigurationProjectName);
        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickDisableProjectBtn()
        .getDisableProjectMsg().should('contain', multiConfProjectPageData.disableProjectMsg)
        multiConfigurationProjectPage
        .getEnableBtn().should('be.visible').and('have.text', 'Enable');
    })
})