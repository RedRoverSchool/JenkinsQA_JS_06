/// <reference types="cypress"/>

import projects from "../fixtures/projects.json"
import messages from "../fixtures/messages.json"

describe('MultibranchPipelineDelete', () => {

    it.skip('Delete the Multibranch Pipeline using dropdown menu', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projects.multibranchPipeline.name)
        cy.get('li[tabindex="0"] span').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('#jenkins-head-icon').click()

        cy.get('tbody tr td a.jenkins-table__link').realHover()
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('[href="/job/Multibranch%20Pipeline1/delete"]').click()
        cy.get('[name="Submit"]').click()

        cy.get('#search-box').type(projects.multibranchPipeline.name + '{enter}')

        cy.get('.error').should('have.text', messages.error)  
    });

    it('AT_16.03_002_Delete the Multibranch Pipeline using left side menu', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projects.multibranchPipeline.name)
        cy.get('li[tabindex="0"] span').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('#jenkins-head-icon').click()

        cy.get('tbody tr td a.jenkins-table__link').click()
        cy.get('#side-panel a[href*="delete"]').click()
        cy.get('[name="Submit"]').click()

        cy.get('#main-panel h1').should('be.visible').should('have.text', 'Welcome to Jenkins!')

        cy.get('#search-box').type(projects.multibranchPipeline.name + '{enter}')
        cy.get('.error').should('have.text', messages.error)  
    });
});
