/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import { name } from "../../fixtures/pom_fixtures/jobConfigurePage.json";

describe("multiConfigurationProject", () => {
    const headerAndFooter = new HeaderAndFooter();

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        cy.createMultiConfigurationProject(name);
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickMultiConfigProjectNameLink(name)
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.07_002 | Delete Multi-configuration project on Dashboard with dropdown menu', () => {
        cy.createMultiConfigurationProject(name);
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickProjectDrpDwnBtn()
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });
});
