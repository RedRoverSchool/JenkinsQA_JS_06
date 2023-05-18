/// <reference types="cypress"/>
import addCreateNewView from "../fixtures/addCreateNewView.json"

describe('myViewsCreateNewView', () => {
  it('My Viewws>Create new view', function () {
    cy.get('a[href $="my-views"]').realHover();
    cy.get('a[href $="my-views"]').click();
    cy.get('a[href$="/newJob"]').click();
    cy.get('#name').type(addCreateNewView.jobName);
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();
    cy.get('#general').should('have.text', addCreateNewView.header);
    cy.get('.jenkins-button--primary').click();
    cy.get('.job-index-headline').should('have.text', `Project ${addCreateNewView.jobName}`);
    cy.get('a.model-link[href="/"').click();
    cy.get('a[href $="my-views"]').click();
      
    cy.get('.addTab').should('be.visible').click();
    cy.get('#name').type(addCreateNewView.viewName);
    cy.get('.jenkins-radio:last-child label').should('have.text', addCreateNewView.myViews).click();
    cy.get('#ok').click();
    cy.get('.tab.active').contains(addCreateNewView.viewName);
    cy.get('a[href$="delete"]').click();
    cy.get('#main-panel > form > button').click();
  });
})

