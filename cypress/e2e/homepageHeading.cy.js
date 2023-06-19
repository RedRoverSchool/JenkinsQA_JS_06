/// <reference types="cypress"/>

describe.skip("Homepage > Main Panel", () => {
  it("AT_02.07.001 | Main panel > Verify the heading", function () {
    cy.get(".empty-state-block > h1")
      .should("be.visible")
      .should("have.text", "Welcome to Jenkins!");
  });
});
