/// <reference types="cypress"/>

describe('Verify Add Description click', () => {
  it('verify clickable', function () {
    cy.get('.leading-icon').realHover();
    cy.get('#description-link').should('be.visible').and('include.text', 'Add description').click();
    cy.get('.jenkins-input').type('Success');
    cy.get('.jenkins-input').should('be.visible');
  });
})
