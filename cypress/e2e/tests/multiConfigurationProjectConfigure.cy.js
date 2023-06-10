/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import multiConfigurationProjectConfigurePageData from "../../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json";

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
        .should('have.value', multiConfigurationProjectConfigurePageData.advancedProjectOptionsFields["Quiet period"].defaultValue)        
    });

    it.only('AT_14.05_010_2 | Multi-configuration project. Advanced project options default values2', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
        .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
        .clickMultiConfProjectDrpDwnConfigureLink()
        .clickAdvancedBtn()
        .clickRetryCountCheckBox()
        .getRetryCountInput()
        .should('have.value', multiConfigurationProjectConfigurePageData.advancedProjectOptionsFields
                ["Retry Count"]["SCM checkout retry count"].defaultValue);        
    });    
});
