/// <reference types="cypress"/>
import createNewView from "../fixtures/createNewView.json"
import myViews from "../fixtures/myViews.json"

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

  beforeEach('Create New Job', function () {
      cy.get('a[href="/view/all/newJob"]').click();
      cy.get('#name').type(myViews.projectNames[0]);
      cy.get('.label').contains(myViews.projectNames[0]).click();
      cy.get('#ok-button').click();
      cy.get('button[name="Submit"]').click();
      cy.contains('Dashboard').click();
  });

  it('AT_09.01_005 | My Views > Create new view > Verify "+" sign above jobs list is available', () => {
      cy.get('a[href="/me/my-views"]').click();
      cy.get('.addTab').should('be.visible').click();
      cy.url().should('contain', myViews.newViewPageURL);
      cy.title().should('eq', 'Jenkins');
      cy.get('#breadcrumbs li:last-child').should('have.text', myViews.newViewItemOnTopMenu)
  });
});
