/// <reference types="cypress"/>

describe.skip('Header | Head Icon', () => {

    it.skip('Verify Jenkins icon', function () {
        cy.get('#jenkins-head-icon').should('be.visible');        
    });

    it.skip('AT_01.01.032 | Header Icon verify', () => {
        cy.get('#jenkins-head-icon').should('be.visible')    
    })
})
