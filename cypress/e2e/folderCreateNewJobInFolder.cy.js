/// <reference types="cypress"/>
import addJob from "../fixtures/addJob.json"
import createFolder from "../fixtures/createFolder.json"

const PORT = Cypress.env("local.port");

describe('Folder Create a new job inside a folder', () => {
  beforeEach('createFolder', () => {
    cy.get('a[href="newJob"]').click();
    cy.get('input#name').type(createFolder.folderName);
    cy.get('li[tabindex="0"] span').contains(createFolder.folder).click();
    cy.get('#ok-button').click();
    cy.get('button[name=Submit]').click();
    cy.get('#main-panel > h1').then(($h1) => {
      const text = $h1.text().trim();
      expect(text).to.equal(createFolder.folderName);
    });   
  });

  it('AT_15.05.001 | Folder > Create a new job inside a folder', () => {      
    cy.get('a[href="newJob"]').should('have.text', addJob.createBtn);
    cy.get('a[href="newJob"]').click();
    cy.url().should('equal', `http://localhost:${PORT}/job/${createFolder.folderName}/newJob`);
    cy.get('input#name').type(addJob.projectName);
    cy.get('li[tabindex="0"] span').contains(addJob.freestyleProject).click();
    cy.get('#ok-button').click();
    cy.get('h2#general').should('have.text', addJob.header);
    cy.get('button[name=Submit]').click();
    cy.get('h1.job-index-headline').should('have.text', addJob.projectHeader);
  }); 
});