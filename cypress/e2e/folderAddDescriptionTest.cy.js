/// <reference types="cypress"/>
import userDescription from "../fixtures/userDescription.json";

describe('Folder > Add User description with "Add description" button', () => {
  it.skip("AT 15.02.001 | Add User description", () => {
    cy.get("a[href='/view/all/newJob']").click();
    cy.get("input#name").type("Folder name");
    cy.get('li[class="com_cloudbees_hudson_plugins_folder_Folder"]').click();
    cy.get("#ok-button").click();
    cy.get("button[name='Submit']").click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").type(userDescription.textDescription);
    cy.get("button[name='Submit']").click();
    cy.get("#description")
      .should("include.text", userDescription.textDescription);
  });

  it("AT_15.02_003 | “Add description” button is visible and clickable", () => {
    cy.get("a[href='/view/all/newJob']").click();
    cy.get('li[class="com_cloudbees_hudson_plugins_folder_Folder"]')
      .click()
      .type("New project Anna I {enter}");
    cy.get('button[name="Submit"]').click();

    cy.get("#description-link").should("be.visible").click();
    cy.get('textarea[name="description"]').should("exist");
  });
});
