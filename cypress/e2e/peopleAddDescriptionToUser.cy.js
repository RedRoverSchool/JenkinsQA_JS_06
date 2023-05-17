/// <reference types="cypress"/>
import userDescription from "../fixtures/userDescription.json";

describe("peopleAddDescriptionToUser", () => {
  it("AT 06.02.001 | Verify description is added to user", function () {
    cy.get("a.task-link").eq(1).click();
    cy.get(".jenkins-table__link").first().click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").clear().type(userDescription.textDescription);
    cy.get(".jenkins-button").click();
    cy.get("#description").should("include.text", userDescription.textDescription)
  });
});
