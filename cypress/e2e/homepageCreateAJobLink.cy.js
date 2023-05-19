/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  it('<Main Panel> Verify the "Create a job" link in the "Start building your software project" section', function () {
    cy.get('.content-block a[href="newJob"]')
      .should("be.visible")
      .should("have.text", "Create a job")
      .click();
    cy.url().should("include", "/newJob");
    cy.get(".add-item-name .h3").should("have.text", "Enter an item name");
  });
});
