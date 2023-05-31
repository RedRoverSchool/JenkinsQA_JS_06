/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";

import newItems from "../../fixtures/newItems.json"


describe('createFreestyleProject', () => {
    const homePage = new HomePage();

    it('verify user can create job FP', () => {
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectFP()
            .clickOKBtn()
            .clickSubmitProjectBtn()
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })

    it('verify user can edit project description', () => {
        cy.createFreestyleProject(newItems.projectName)
        cy.addDescriptionFreestyleProject('text')

        homePage
            .clickLogoIcon()
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
