/// <reference types="cypress"/>

describe('Header', () => {

    it('Verify Jenkins icon', function () {

        cy.get('#jenkins-head-icon').should('be.visible')
        cy.get('#jenkins-head-icon').click()
        cy.url().should('contain', 'localhost')

        cy.get('#jenkins-head-icon').should('have.css', 'height', '40px')
        cy.get('#jenkins-head-icon').should('have.css', 'vertical-align', 'middle')
    });

    
    it.only('Verify logo jenkins is visible on the header', function () {
        cy.get('#jenkins-head-icon')
          .should('be.visible')
          .should('have.css', 'height', '40px')
          .should('have.css', 'vertical-align', 'middle')
          .click()
        
        cy.url()
          .should('contain', 'localhost')

        cy.get('.empty-state-block h1')
          .should('contain', 'Welcome to Jenkins!')
    });
})
