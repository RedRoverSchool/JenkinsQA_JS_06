/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  it("Main panel > Verify the heading", function () {
    cy.get("h1")
      .should("be.visible")
      .should("have.text", "Welcome to Jenkins!");
  });
});
