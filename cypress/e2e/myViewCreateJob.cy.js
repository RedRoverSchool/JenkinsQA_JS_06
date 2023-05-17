/// <reference types="cypress"/>
const PORT = Cypress.env("local.port");

describe('myViewsCreateJob', () => {
   it('AT_09.08.001 | <My view> Create job', () => {      
    cy.get('a[href$="my-views"]').click();
    cy.url().should('equal', `http://localhost:${PORT}/me/my-views/view/all/`);
   cy.get('a[href="newJob"]').should('have.text', 'Create a job');
   cy.get('a[href="newJob"]').click();
   cy.url().should('equal', `http://localhost:${PORT}/me/my-views/view/all/newJob`);
   cy.get('input#name').type('My Project');
   cy.get('li[tabindex="0"] span').contains('Freestyle project').click();
   cy.get('#ok-button').click();
   cy.get('h2#general').should('have.text', 'General');
   cy.get('button[name=Submit]').click();
   cy.get('h1.job-index-headline').should('have.text', 'Project My Project');
  }); 
});