/// <reference types="cypress"/>

describe('Header Head Icon', () => {

    it('Verify that Head Icon is visible and clickable', () => {
        cy.get('#jenkins-home-link').should('be.visible').click()
        cy.url().should('include', 'http://localhost:8080/')
    })

    it('AT_01.01_012 | Jenkins Header logo is visible and clickable', () => {
        cy.get('a[href="newJob"]').find('span').contains('Create a job').click()
        cy.get('#jenkins-name-icon').click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/`)
    })

    it('AT_01.01.036 | Head Icon visible and active', () => {
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get('#jenkins-head-icon')
            .should('be.visible')
            .click()
        cy.get('h1').should('have.text', 'Welcome to Jenkins!')
    })
})