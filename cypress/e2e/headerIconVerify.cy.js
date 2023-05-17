/// <reference types="cypress"/>

describe('Header | Head Icon', () => {
    
    it('Verify Jenkins icon', function () {
        cy.get('#jenkins-head-icon').should('be.visible');        
    });
    //mt
    it('AT_01.01.032 | Header Icon verify', () => {
        cy.get('#jenkins-head-icon').should('be.visible').click()
        cy.url().should('include', 'http://localhost:8080/')
    })
})
