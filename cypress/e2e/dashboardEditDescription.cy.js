/// <reference types="cypress"/>
import descriptionsProject from "../fixtures/descriptionsProject.json"

describe(`Dashboard Edit Description`, () => {
  it('20.02 _001| Dashboard > Editing Description', () => {
    cy.get('#description-link').contains('Add').click()
    cy.get('.jenkins-input').type(descriptionsProject.addDescriptionProject)
    cy.get('button[name="Submit"]').contains('Save').click()
    cy.get('#description div:first-of-type').should('have.text', 'Project DemoQA')

    cy.get('#description-link').contains('Edit').click()
    cy.get('.jenkins-input').clear().type(descriptionsProject.editDescriptionProject)
    cy.get('button[name="Submit"]').contains('Save').click()
    cy.get('#description div:first-of-type').should('have.text',' - QA JS 06')
  });

it('AT_20.02_003 | Dashboard Verify The "Edit Description" button', () => {
  cy.get('[href="/view/all/newJob"] .task-icon-link').click();
  cy.get("#name").type("First Project");
  cy.get(".hudson_model_FreeStyleProject .label").click();
  cy.get("#ok-button").click();
  cy.get('[name="Submit"]').click();
  cy.get('#breadcrumbBar a[href="/"]').click();
  cy.get("#description-link").click();
  cy.get('[name="description"]').type("First Description");
  cy.get('[name="Submit"]').click();
  cy.get("#description div:first-of-type").should(
    "have.text",
    "First Description"
  );

  cy.get(' [href="editDescription"]').click();
  cy.get('[name="description"]').clear().type("Second Description");
  cy.get('[name="Submit"]').click();
  cy.get("#description div:first-of-type").should(
    "not.have.text",
    "First Description"
  );
  cy.get("#description div:first-of-type").should(
    "have.text",
    "Second Description"
  );
  cy.get(' [href="editDescription"]').click();
  cy.get('[name="description"]').clear();
  cy.get('[name="Submit"]').click();
   cy.get("#description div:first-of-type").should(
     "not.have.text");
});
});