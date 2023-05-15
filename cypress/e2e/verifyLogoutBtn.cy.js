/// <reference types="cypress"/>
describe ('01.08 _010 <Header>Log out button', () => {
it ('verify btn "Log out"', () => {
    cy.get('a[href="/logout"]').should('have.text', 'log out')
})
})