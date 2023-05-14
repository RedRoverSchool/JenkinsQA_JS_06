/// <reference types="cypress"/>

describe('Home page>Verification "add description" button', () => {
    it('Verification "add description" button', function () {
        cy.get('#description-link').click()
        cy.get('#description').should('be.visible').click();        
    });
});