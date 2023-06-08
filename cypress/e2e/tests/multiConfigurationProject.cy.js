/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import multiConfProjectPageData from "../../fixtures/pom_fixtures/multiConfProjectPage.json";

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();

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
            .clickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.06.003 | Rename Multi-configuration project with the current name', () =>{
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .clickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
            .selectRenameMultiConfProjectDrpDwnMenuBtn()
            .typeMultiConfProjectNameInputField(newItemPageData.multiConfigurationProjectName)
            .clickMultiConfProjectRenameBtn()
            .getCurrentNameMessage()
            .should('contain.text', multiConfProjectPageData.currentNameMsg)
    })
})
