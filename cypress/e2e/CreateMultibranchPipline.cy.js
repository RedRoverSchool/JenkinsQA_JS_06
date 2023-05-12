/// <reference types="cypress"/>

const multibranchName = 'TestMulti'

describe('<New Item> Create a new Multibranch Pipeline', () => {
    
    it('New Item > Create a new Multibranch Pipeline [+New Item]', function () {
        cy.contains('New Item').click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/view/all/newJob`)

        cy.get("#name").type(multibranchName)

        cy.contains("Multibranch Pipeline").click()

        cy.get('#ok-button')
        .should('be.visible')
        .click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/job/${multibranchName}/configure`)

        cy.contains('Save').click()

        cy.get('#main-panel > h1').should('contain', multibranchName)

        cy.get(':nth-child(1) > .model-link').click()

        cy.get('.jenkins-table__link > span')
        .should('have.text', multibranchName)
    })
})