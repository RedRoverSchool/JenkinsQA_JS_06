/// <reference types="cypress"/>

describe('Header User Icon', () => {
    
    it('AT_01.03_001 | Verify “User icon” is visible on the right side of the header', function () {
    cy.get('.login .model-link').should('be.visible');
    });
})
