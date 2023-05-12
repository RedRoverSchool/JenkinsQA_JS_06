/// <reference types="cypress"/>

describe('Header | Head Icon', () => {
    
    it('Verify Jenkins icon', function () {
        cy.get('#jenkins-head-icon').should('be.visible');        
    });
})