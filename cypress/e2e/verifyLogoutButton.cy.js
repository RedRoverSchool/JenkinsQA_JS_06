/// <reference types = "cypress" />

describe.skip('<Header> Log out button', () => {
    it ('verify visibility of Logout button', () => {
        cy.get ('a[href="/logout"]').should('have.text', 'log out')
    })
})