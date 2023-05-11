/// <reference types="cypress"/>

describe('Folder', () => {
  it('verify that user can add description to Folder', function () {
    
    cy.get('a[href="newJob"]').click();
    cy.get('input#name').type('TestProject');
    cy.get('li[tabindex="0"] span').contains('Folder').click();
    cy.get('#ok-button').click();
    cy.get('button[name=Submit]').click();
    cy.get('#main-panel > h1').then(($h1) => {
      const text = $h1.text().trim();
      expect(text).to.equal('TestProject');
    });
    
    cy.get('a#description-link').click();
    cy.get('textarea.jenkins-input').type('My description');
    cy.get('button[name=Submit]').click();
    cy.get('div#description>div:first-child').should('have.text', 'My description');
  }); 
});