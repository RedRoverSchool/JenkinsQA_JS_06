/// <reference types="cypress"/>

describe('Header Log out button', () => {
    it('Verify logout button is visible', function () {
      cy.get('a[href="/logout"]').should('be.visible').and('have.text','log out');
    });

    it('Verify logout button is clickable and redirects to login page', function () {
        cy.get('a[href="/logout"]').click();
        cy.url().should('contain', 'login')
        cy.get('#j_username').should('be.visible').and('have.attr', 'placeholder', 'Username');
        cy.get(':nth-child(2) > .jenkins-input').should('be.visible').and('have.attr', 'placeholder', 'Password');
        cy.get('.submit button').contains('Sign in').should('be.visible');
      });      
  });
