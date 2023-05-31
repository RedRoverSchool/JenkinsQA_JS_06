/// <reference types="cypress" />

import Header from "../../pageObjects/Header"
import HomePage from "../../pageObjects/HomePage";


import newItems from "../../fixtures/newItems.json"

const header = new Header();
const homePage = new HomePage();


describe('createFreestyleProject', ()=>{
    it('verify user can create job FP', ()=>{
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(projectName)
            .clickTypeProjectFP()
            .clickOKBtn()
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })

    it('verify user can edit project description', ()=>{
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
