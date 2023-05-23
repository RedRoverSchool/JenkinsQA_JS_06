/// <reference types="cypress"/>

describe('dashboardIcons', () => {

    it('AT_20.01_003 | Dashboard > Verify table size is L', () => {

        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project 1')
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('button#ok-button').click()
        cy.get('button.jenkins-button--primary ').click()

        cy.get('jenkins-home-link').click()

        cy.get('a[tooltip="Large"]').click()
        cy.get().should('have.css', '--table-padding', '0.55rem')
    })
})