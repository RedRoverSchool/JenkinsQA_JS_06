/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  it.skip('<Main Panel> Verify the "Set up an agent" link in the "Set up a distributed build" section', function () {
    cy.get('.content-block a[href="computer/new"]')
      .should("be.visible")
      .should("have.text", "Set up an agent")
      .click();
    cy.url().should("include", "computer/new");
    cy.get(".jenkins-app-bar__content > h1").should("have.text", "New node");
  });
  
  it.skip("AT_02.07.009 | Homepage Verify the 'Set up an agent' link on the main page when no jobs have been created", () => {
    cy.get(".empty-state-block h1").should("have.text", "Welcome to Jenkins!");
    cy.get("h2.h4").contains("Set up a distributed build").should("be.visible");
    cy.get('[href="computer/new"]').click();
    cy.url().should("contain", "computer/new");
    cy.get(".jenkins-radio .jenkins-radio__label").should(
      "have.text",
      "Permanent Agent"
    );
  });
});
