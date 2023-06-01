/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import Header from "../../pageObjects/Header";

import newItems from "../../fixtures/newItems.json"


describe('createFreestyleProject', () => {
    const homePage = new HomePage();
    const header = new Header();

    it('verify user can create job FP', () => {
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectFP()
            .clickOKBtnGoToConfigPage()
            .clickSubmitBtnGoFreestyleProjectPage()

        header
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })

    it('verify user can edit project description', () => {
        cy.createFreestyleProject(newItems.projectName)
        cy.addDescriptionFreestyleProject('text')

        header
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
