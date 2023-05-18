/// <reference types="cypress"/>
import userDescription from "../fixtures/userDescription.json";

describe("peopleAddDescriptionToUser", () => {
  const newDescription = 'new user description';

  it("AT 06.02.001 | Verify description is added to user", function () {
    cy.get("a.task-link").eq(1).click();
    cy.get(".jenkins-table__link").first().click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").clear().type(userDescription.textDescription);
    cy.get(".jenkins-button").click();
    cy.get("#description").should("include.text", userDescription.textDescription)
  });

  it('AT_06.02_003 | Verify save button functionality', () => {
    cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
    cy.get('.jenkins-table__link').click();
    cy.get('#description-link').click();
    cy.get('.jenkins-input').type(newDescription);
    cy.get('.jenkins-button').click();
    cy.get(':nth-child(1) > .task-link-wrapper > .task-link').click();
    cy.get('.jenkins-table__link').click();
    cy.get('#description').should('include.text','new user description')
    
  });
});
