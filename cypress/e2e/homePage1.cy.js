/// <reference types="cypress"/>

describe('verify user can create a new job', () => {
    it('AT_02.01_002 | <Homepage> Create a clickable job link', function () {
        cy.get('li .content-block__link').contains('Create a job').should('be.visible')
      cy.get('li .content-block__link').contains('Create a job').click()
      cy.get('.add-item-name #name').type('Project2')
      cy.get('.j-item-options').click()
    //   cy.get
    });
  });