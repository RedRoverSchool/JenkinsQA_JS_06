/// <reference types="cypress"/>
import descriptions from "../fixtures/homePage.json"

describe.skip('Dashboard Edit Description', () => {
  it.skip('20.02 _001| Dashboard > Editing Description', () => {
    cy.get('#description-link').contains(descriptions.add).click()
    cy.get('.jenkins-input').type(descriptions.addDescription)
    cy.get('button[name="Submit"]').contains(descriptions.save).click()
    cy.get('#description div:first-of-type').should('have.text', descriptions.addDescription)

    cy.get('#description-link').contains(descriptions.edit).click()
    cy.get('.jenkins-input').clear().type(descriptions.editDescription)
    cy.get('button[name="Submit"]').contains(descriptions.save).click()
    cy.get('#description div:first-of-type').should('have.text', descriptions.editDescription)
  });

it.skip('AT_20.02_003 | Dashboard Verify The "Edit Description" button', () => {
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

it('20.02_004 | Edit the project description on the dashboard', () => {
  cy.get('#description-link').click()
  cy.get('textarea.jenkins-input')
  .clear()
  .type('Description for Cypress')
  cy.get('button.jenkins-button.jenkins-button--primary ').click()
  cy.get('#description div').should('contain', 'Description for Cypress')

})