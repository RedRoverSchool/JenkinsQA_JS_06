/// <reference types="cypress"/>

describe('Folder > Add User description with "Add description" button', () => {
  let textDescription = "User description";
  let newDescription =
    "New very long description with numbers 2023 and symbols #$@";

  it("TC 15.02_003 Add description", () => {
    cy.get(".task-link").eq(1).click();
    cy.get(".jenkins-table__link").click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").clear().type("Hello world!");
    cy.get(".jenkins-button").click();
    cy.get("#description > :nth-child(1)").should("contain", "Hello world!");
  });

  it("AT 15.02.001 | Add User description", function () {
    cy.get("a.task-link").eq(1).click();
    cy.get(".jenkins-table__link").first().click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").type("{selectall}").type(textDescription);
    cy.get(".jenkins-button").click();
    cy.get("#description div:nth-of-type(1)")
    .should( "have.text", textDescription);
  });

  it("AT_15.03_001 | Folder > Edit description", () => {
    cy.get("a.task-link").eq(1).click();
    cy.get(".jenkins-table__link").first().click();
    cy.get("#description-link")
      .invoke("text")
      .should("contain", "Edit description");

    cy.get("#description-link").click();
    cy.get(".jenkins-input").type("{selectall}").type(newDescription);
    cy.get(".jenkins-button").click();
    cy.get("#description div:nth-of-type(1)")
      .should("have.text", newDescription);
  });
});
