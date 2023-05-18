/// <reference types="cypress"/>
import addJob from "../fixtures/addJob.json"

const PORT = Cypress.env("local.port");

describe('myViewsCreateJob', () => {
   it('AT_09.08.001 | <My view> Create job', () => {      
    cy.get('a[href$="my-views"]').click();
    cy.url().should('equal', `http://localhost:${PORT}/me/my-views/view/all/`);
   cy.get('a[href="newJob"]').should('have.text', addJob.createBtn);
   cy.get('a[href="newJob"]').click();
   cy.url().should('equal', `http://localhost:${PORT}/me/my-views/view/all/newJob`);
   cy.get('input#name').type(addJob.projectName);
   cy.get('li[tabindex="0"] span').contains(addJob.freestyleProject).click();
   cy.get('#ok-button').click();
   cy.get('h2#general').should('have.text', addJob.header);
   cy.get('button[name=Submit]').click();
   cy.get('h1.job-index-headline').should('have.text', addJob.projectHeader);
  }); 
});