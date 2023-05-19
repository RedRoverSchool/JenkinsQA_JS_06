/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  it('<Main Panel> Verify the "Set up an agent" link in the "Set up a distributed build" section', function () {
    cy.get('.content-block a[href="computer/new"]')
      .should("be.visible")
      .should("have.text", "Set up an agent")
      .click();
    cy.url().should("include", "computer/new");
    cy.get(".jenkins-app-bar__content > h1").should("have.text", "New node");
  });
});
