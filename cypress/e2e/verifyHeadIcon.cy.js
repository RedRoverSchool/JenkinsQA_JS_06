/// <reference types="cypress"/>

describe('<Header> Head Icon', () => {
    it('Verify Head Icon Redirection', () => {
        cy.visit('http://localhost:8080/asynchPeople/')
        cy.get('#jenkins-name-icon').click()
        cy.url().should('eq', 'http://localhost:8080/')
    })
})