/// <reference types="cypress" />

describe('Head Icon', () => {

    it('Verify Jenkins icon and name-icon are visible in header', () => {
        cy.get('#jenkins-head-icon').should("be.visible")
        cy.get('#jenkins-name-icon').should("be.visible")
    })

    it('Verify Jenkins icon redirection to the homepage', () => {
        cy.get('#jenkins-head-icon').click()
        cy.url().should('include', 'localhost')
    })
})