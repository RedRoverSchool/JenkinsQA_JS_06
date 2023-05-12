/// <reference types="cypress"/>

describe('Jenkins Dashboard', () => {
    it('Log out button is clickable ', function () {
      cy.get('a[href="/logout"]').should('exist').click()
      cy.url().should('eq', 'http://localhost:8080/login?from=%2F')
    });
})