/// <reference types = "cypress" />

describe ('<Header> Log out button', () => {
    it ('verify visibility of Logout button', () => {
        cy.get ('a[href="/logout"]').should('have.text', 'log out')
    })
})