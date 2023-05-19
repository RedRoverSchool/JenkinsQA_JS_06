/// <reference types="cypress"/>
import createNewView from "../fixtures/createNewView.json"

describe('freestyleProjectEditDescription', () => {

  beforeEach('create Freestyle Project', function () {
    cy.get('a[href$="my-views"]').realHover();
    cy.get('a[href$="my-views"]').click();
    cy.get('a[href$="/newJob"]').click();
    cy.get('#name').type(createNewView.jobName);
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();
    cy.get('#general').should('have.text', createNewView.header);
    cy.get('.jenkins-button--primary').click();
  })
  it('AT_12.07_001 | Freestyle project> Edit description> Verify Type text', function () {
    cy.get('.leading-icon').realHover();
    cy.get('#description-link').should('be.visible').and('includes.text', createNewView.description).click();
    cy.get('.jenkins-input').type(createNewView.typeText);
    cy.get('.jenkins-input').should('be.visible');
    cy.get('.jenkins-button--primary').click();
    cy.get('#description').contains(createNewView.typeText)
  });
})
