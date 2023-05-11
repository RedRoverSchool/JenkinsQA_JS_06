/// <reference types="cypress"/>

import projects from "../fixtures/projects.json"
import messages from "../fixtures/messages.json"

describe('Multibranch Pipeline Delete Multibranch Pipeline', () => {

    it('Delete the Multibranch Pipeline using dropdown menu', () => {
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
});
