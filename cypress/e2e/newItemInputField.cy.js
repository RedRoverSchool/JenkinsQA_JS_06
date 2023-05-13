/// <reference types="cypress"/>

describe('New Item', () => {

    it('Verify New Item has input field', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
        cy.get('.jenkins-input').should('be.visible')
    })
})