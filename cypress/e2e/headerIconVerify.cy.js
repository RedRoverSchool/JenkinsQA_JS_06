/// <reference types="cypress"/>

describe('<Header> Head Icon', () => {
    
    it('Verify Jenkins icon and name-icon', function () {
        cy.get('#jenkins-head-icon').should('be.visible');
        cy.get('#jenkins-name-icon').should('be.visible');
    });
})