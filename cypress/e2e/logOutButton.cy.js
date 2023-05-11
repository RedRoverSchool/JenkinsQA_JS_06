/// <reference types="cypress"/>

describe('Header', () => {

    it('Verify logout button is visible and redirects to the login page', () => {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.get('#loginIntroDefault').should('be.visible')
    })
})