/// <reference types="cypress"/>

describe.skip('Header > Log out button', () => {
    
    it.skip('AT_01.08_002 | Verify log out button', () => {
        cy.get(' a[href="/logout"]').click()
        cy.get('h1').should('have.text', 'Welcome to Jenkins!')
    });
});
