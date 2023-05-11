/// <reference types="cypress"/>

describe('Header Head Icon', () => {

    it('Verify that Head Icon is visible and clickable', () => {
        cy.get('#jenkins-home-link').should('be.visible').click()
        cy.url().should('include', 'http://localhost:8080/')
    })
})