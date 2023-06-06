/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import { name } from "../../fixtures/pom_fixtures/jobConfigurePage.json";
import multiConfProjectPage from "../../fixtures/pom_fixtures/multiConfProjectPage.json"

describe("multiConfigurationProject", () => {
    const headerAndFooter = new HeaderAndFooter();
    beforeEach(() => {
        cy.createMultiConfigurationProject(name);
    })

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickMultiConfigProjectNameLink(name)
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.07_002 | Delete Multi-configuration project on Dashboard with dropdown menu', () => {
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickProjectDrpDwnBtn()
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.06.003 | Rename Multi-configuration project with the current name', () =>{
        headerAndFooter
        .clickJenkinsHomeLink()
        .clickProjectDrpDwnBtn()
        .selectRenameMultiConfProjectDrpDwnMenuBtn()
        .typeMultiConfProjectNameInputField(name)
        .clickMultiConfProjectRenameBtn()
        .getCurrentNameMessage()
        .should('contain.text', multiConfProjectPage.currentNameMsg)
    })
});
