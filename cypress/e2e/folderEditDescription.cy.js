/// <reference types="cypress"/>

import createFolder from "../fixtures/createFolder.json"

describe('Folder edit description', () => {
  beforeEach('createFolder', () => {
    cy.get('a[href="newJob"]').click();
    cy.get('input#name').type('TestProject');
    cy.get('li[tabindex="0"] span').contains('Folder').click();
    cy.get('#ok-button').click();
    cy.get('button[name=Submit]').click();
    cy.get('#main-panel > h1').then(($h1) => {
      const text = $h1.text().trim();
      expect(text).to.equal('TestProject');
    });
    cy.get('a#description-link').should('contain', 'Add description').click();
    cy.get('textarea.jenkins-input').type('My description');
    cy.get('button[name=Submit]').click();
    cy.get('div#description>div:first-child').should('have.text', 'My description');
  });

  it('AT_15.03_001 | Folder Edit description', () => {      
    cy.get('a#description-link').should('contain', 'Edit description').click();
    cy.get('textarea.jenkins-input').clear().type('New description');
    cy.get('button[name=Submit]').click();
    cy.get('div#description>div:first-child').should('have.text', 'New description');
    cy.get('a#description-link').should('contain', 'Edit description');
  }); 

  it('AT_15.03.002 | Folder > Verify possibility to edit description', () => {
    cy.get('#description-link').click()
    cy.get('#description textarea').clear().type(createFolder.newDescriptionFolder)
    cy.get('.jenkins-button').click()

    cy.get('#description').should('contain', createFolder.newDescriptionFolder)
  });

  it('AT_15.03_003 | Folder > Prewiew description text matches the new description', () => { 
    cy.get('#description-link').click()
    cy.get('#description textarea').clear().type(createFolder.newDescriptionFolder)
    cy.get('a.textarea-show-preview').click(  ) 

    cy.get('.textarea-preview')
    .should('be.visible')
    .invoke('text')
    .should('eq', createFolder.newDescriptionFolder);
  });
});
