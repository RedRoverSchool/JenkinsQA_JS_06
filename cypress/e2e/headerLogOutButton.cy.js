/// <reference types="cypress"/>

describe('Header Log out button', () => {
    it('AT_01.08_011 Log out button', () => {
        cy.get('[href="/logout"] > .hidden-xs').click();
        cy.get('#loginIntroDefault').should('have.text', 'Welcome to Jenkins!')
    })
})
