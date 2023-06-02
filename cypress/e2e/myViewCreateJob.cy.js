/// <reference types="cypress"/>
import addJob from "../fixtures/addJob.json"
import createJob from "../fixtures/createJob.json"

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

  it('AT_09.08.002 My view Create job Verify User should be able to enter item name, choose type, click Ok', () => {
    cy.get('a[href="/me/my-views"]').click();

    cy.get('a[href="newJob"]').click();
    cy.get('input#name').type(addJob.projectName);
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();
    cy.get('h2#general').should('have.text', addJob.header);
    cy.url().should('include', addJob.configurePageEndpoint);
  });

  it('AT_09.08.003 My view Create job Verify User can insert general information about item and save it', () => {
    cy.get('a[href="/me/my-views"]').click();
    cy.get('a[href="newJob"]').click();
    cy.get('input#name').type(addJob.projectName);
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();

    cy.get('textarea.jenkins-input[name="description"]').type(addJob.description);
    cy.get('button[name="Submit"]').click();
    cy.get('h1.job-index-headline').should('have.text', addJob.projectHeader);
    cy.get('#description > div:first-of-type').then(($e) => {
      const description = $e.text()
      expect(description).eq(addJob.description)
    })
  });

    it('AT_09.08.004 My Views-Create a job, verify user can create a job', () =>{
        cy.get('a[href="/me/my-views"]').click()
        cy.get('.empty-state-block h2').should('be.visible').and('have.text', createJob.verifyText)
        cy.get('a[href="newJob"]').click()
        cy.get('.jenkins-input').type(createJob.typeOn)
        cy.get('#j-add-item-type-nested-projects').should('contain',createJob.verifyFolder).click()
        cy.get('#ok-button').click()
       cy.get('.jenkins-app-bar__content h1').should('be.visible').and('have.text', createJob.verifyPage)
       cy.get('button[name=Submit]').click()
       cy.get('#main-panel h1').should('contain', createJob.jobFolder)
    })
});