/// <reference types="cypress"/>

describe('AT_02.01_002 | Homepage > Create a clickable job link', () => {
    it('Create a clickable job link', function () {
      cy.get('li .content-block__link').contains('Create a job').should('be.visible')
      cy.get('li .content-block__link').contains('Create a job').click()
      cy.get('.add-item-name #name').type('Project2')
      cy.get('.hudson_model_FreeStyleProject').click()
      cy.get('#ok-button').click()
      cy.get('#general').should('be.visible')
    });
  });