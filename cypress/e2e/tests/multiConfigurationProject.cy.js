/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import jobConfigurePageData from "../../fixtures/pom_fixtures/jobConfigurePage.json";
import multiConfProjectPageData from "../../fixtures/pom_fixtures/multiConfProjectPage.json";

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        cy.createMultiConfigurationProject(jobConfigurePageData.name);
        homePage
            .clickMultiConfigProjectNameLink(jobConfigurePageData.name)
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.07_002 | Delete Multi-configuration project on Dashboard with dropdown menu', () => {
        cy.createMultiConfigurationProject(jobConfigurePageData.name);
        homePage
            .clickProjectDrpDwnBtn()
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.06.003 | Rename Multi-configuration project with the current name', () =>{
        cy.createMultiConfigurationProject(jobConfigurePageData.name);
        homePage
            .clickProjectDrpDwnBtn()
            .selectRenameMultiConfProjectDrpDwnMenuBtn()
            .typeMultiConfProjectNameInputField(jobConfigurePageData.name)
            .clickMultiConfProjectRenameBtn()
            .getCurrentNameMessage()
            .should('contain.text', multiConfProjectPageData.currentNameMsg)
    })
});
