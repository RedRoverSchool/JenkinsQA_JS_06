/// <reference types="cypress"/>
import createNewView from "../fixtures/createNewView.json"
import newItemNames from "../fixtures/newItemNames.json"

const createSomeDifferentJobs = (numberOfJobs) => {
  for (let project of newItemNames.projectNames.slice(0, numberOfJobs)) {
      cy.get('a[href="/view/all/newJob"]').click();
      cy.get('#name').type(project);
      cy.get('.label').contains(project).click();
      cy.get('#ok-button').click();
      cy.get('button[name="Submit"]').click();
      cy.contains('Dashboard').click();
  };
};

describe('myViewsCreateNewView', () => {

  beforeEach('create the job', function () {
    cy.get('a[href$="my-views"]').realHover();
    cy.get('a[href$="my-views"]').click();
    cy.get('a[href$="/newJob"]').click();
    cy.get('#name').type(createNewView.jobName);
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();
    cy.get('#general').should('have.text', createNewView.header);
    cy.get('.jenkins-button--primary').click();
    cy.get('.job-index-headline').should('have.text', `Project ${createNewView.jobName}`);
    cy.get('a.model-link[href="/"').click();
    cy.get('a[href$="my-views"]').should('contain.text', createNewView.myView).click();
})

  it('AT_09.01_001 | My Views>Create new view', function () {
    cy.get('.addTab').should('be.visible').click();
    cy.get('#name').type(createNewView.viewName);
    cy.get('.jenkins-radio:last-child label').should('have.text', createNewView.myView).click();
    cy.get('#ok').click();
    cy.get('.tab.active').contains(createNewView.viewName);
  });

  afterEach('delete new view', function () {
    cy.get('a[href$="delete"]').click();
    cy.get('#main-panel > form > button').click();
  })
})

describe('My Views Create New View', () => {

  it('AT_09.01_005 | My Views > Create new view > Verify "+" sign above jobs list is available', () => {
      createSomeDifferentJobs(1);
      cy.get('a[href="/me/my-views"]').click();
      cy.get('.addTab').should('be.visible').click();
      cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/my-views/newView`);
      cy.title().should('eq', 'Jenkins');
      cy.get('#breadcrumbs li:last-child').should('have.text', 'New view')
  });
});