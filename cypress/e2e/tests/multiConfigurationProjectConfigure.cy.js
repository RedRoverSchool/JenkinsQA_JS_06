/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import projectData from "../../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json";

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
        .should('have.value', projectData.advancedProjectOptionsFields.QuietPeriod.defaultValue)        
    });

    it('AT_14.05_010_2 | Multi-configuration project. Advanced project options default values2', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
        .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
        .clickMultiConfProjectDrpDwnConfigureLink()
        .clickAdvancedBtn()
        .clickRetryCountCheckBox()
        .getRetryCountInput()
        .should('have.value', projectData.advancedProjectOptionsFields.RetryCount.SCMCheckoutRetryCount.defaultValue);        
    }); 
    
    it('AT_14.05_009 | Verify MultiConfig Project Advanced options are set and saved', () => {
        cy.createMultiConfigProject(newItemPageData.multiConfigurationProjectName);
        homePage
        .clickProjectDropdownMenuBtn()
        .clickMultiConfProjectDrpDwnConfigureLink()
        .clickAdvancedBtn()
        .clickAdvancedOptionsLables()
        .fillAdvancedOptionsForms()
        .clickSaveButton()
        .clickConfigureSideMenuLink()
        .clickAdvancedBtn()
        .createAdvancedOptionsCheckboxesList()        
        .createAdvancedOptionsValuesList()          
        .should('deep.equal', projectData.advancedOptionsValues)
    });
});
