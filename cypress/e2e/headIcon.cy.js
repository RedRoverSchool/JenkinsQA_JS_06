/// <reference types="cypress" />

describe('Head Icon', () => {

    it('Verify Jenkins icon redirection to the homepage', () => {
        cy.get('#jenkins-head-icon').click()
        cy.url().should('include', 'localhost')
    })

    it('Verify logo icon and name-icon are displayed in top-left corner on the page', () => {
        cy.get('#jenkins-head-icon')
            .should('have.prop', 'offsetTop', 0)
            .and('have.prop', 'offsetLeft', 0)

        cy.get('#jenkins-name-icon')
            .should('have.prop', 'offsetTop', 3)
            .and('have.prop', 'offsetLeft', 33)
    })

    it.skip('Verify Head icon Jenkins is present and visible', () => {
        cy.get('#jenkins-head-icon').should("be.visible")
        cy.get('#jenkins-name-icon').should("be.visible")
    })
    
    it('Verify Jenkins icon clickable and redirected to the homepage', () => {
        cy.get('#jenkins-head-icon').click()
        cy.url().should('include', 'localhost')
    })
})