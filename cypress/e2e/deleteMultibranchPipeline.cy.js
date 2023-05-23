/// <reference types="cypress"/>
import {newItem, multibranchPipeline, savePipelineButton, projectName} from '../fixtures/multibranchPipeline.json'
describe('Delete Multibranch Pipeline', () => {
    
    beforeEach('AT_16.03_002 | Delete Multibranch Pipeline', () => {
        cy.contains(newItem).click()
        cy.get('#name').type(projectName)
        cy.contains(multibranchPipeline).click()
        cy.get('#ok-button').click()
        cy.contains(savePipelineButton).click()
        cy.get('#jenkins-name-icon').click()
        cy.contains(projectName).should('exist')
    })  
       
    it('Delete Multibranch Pipeline throw dropDown menu', () => {
        cy.get('#jenkins-name-icon').click()
        cy.get('.jenkins-table__link > span').should('have.text',projectName).realHover({ position: "center" })
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').click()
        cy.contains('Delete Multibranch Pipeline').click()
        cy.get('.jenkins-button').click()
        cy.get('#jenkins-name-icon').click()
        cy.contains(projectName).should('not.exist')
    })
})
