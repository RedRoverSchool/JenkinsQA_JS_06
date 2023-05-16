/// <reference types="cypress"/>
describe ('Header | Log out button', () => {
it ('AT_01.08_010 | Verify btn "Log out"', () => {
    cy.get('a[href="/logout"]').should('have.text', 'log out')
})
})