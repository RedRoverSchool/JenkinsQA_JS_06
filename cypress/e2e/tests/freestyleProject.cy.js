/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import Header from "../../pageObjects/Header";

import newItems from "../../fixtures/newItems.json"


describe('freestyleProject', () => {
    const homePage = new HomePage();
    const header = new Header();

    beforeEach(() => {
        cy.createFreestyleProject(newItems.projectName)
        cy.addProjectDescription('text')
        header.clickLogoIcon()
    })
    
    it('verify user can edit project description', () => {
        homePage
            .clickCreatedProjectLink()
            .clickDescriptionBtn()
            .clearText()
            .typeDescriptionText('new text')
            .clickSaveDescriptionBtn()
            .trimDescriptionText()
            .should('eq', 'new text')
            .and('not.eq', 'text')
    })
})