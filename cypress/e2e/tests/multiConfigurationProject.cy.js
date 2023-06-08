/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { name } from "../../fixtures/pom_fixtures/jobConfigurePage.json";
import multiConfProjectPage from "../../fixtures/pom_fixtures/multiConfProjectPage.json"

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        cy.createMultiConfigurationProject(name);
        homePage
            .clickMultiConfigProjectNameLink(name)
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.07_002 | Delete Multi-configuration project on Dashboard with dropdown menu', () => {
        cy.createMultiConfigurationProject(name);
        homePage
            .hoverAndClickProjectDrpDwnBtn(name)
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.06.003 | Rename Multi-configuration project with the current name', () =>{
        cy.createMultiConfigurationProject(name);
        homePage
            .hoverAndClickProjectDrpDwnBtn(name)
            .selectRenameMultiConfProjectDrpDwnMenuBtn()
            .typeMultiConfProjectNameInputField(name)
            .clickMultiConfProjectRenameBtn()
            .getCurrentNameMessage()
            .should('contain.text', multiConfProjectPage.currentNameMsg)
    })
})
