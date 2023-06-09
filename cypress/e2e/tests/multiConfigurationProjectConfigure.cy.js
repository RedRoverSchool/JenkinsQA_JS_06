/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import multiConfigurationProjectPageData from "../../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json";

describe('multiConfigurationProjectConfigure', () => {
    const homePage = new HomePage();

    it('AT_14.05_010 | Multi-configuration project. Advanced project options default values', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
        .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
        .clickMultiConfProjectDrpDwnConfigureLink()
        .clickAdvancedBtn()
        .clickQuietPeriodCheckBox()
        .getNumberOfSecondsInput()
        .should('have.value', multiConfigurationProjectPageData.advancedProjectOptionsFields["Quiet period"].defaultValue)        
    });
    
});