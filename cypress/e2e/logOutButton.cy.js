/// <reference types="cypress"/>

describe('Header', () => {

    it('Verify logout button is visible', () => {
        cy.get('a[href="/logout"]').should('be.visible')
    })

    it('verify logout button redirects to the login page', () => {
        cy.get('a[href="/logout"]').click()
        cy.get('#loginIntroDefault').should('be.visible')
    })
})