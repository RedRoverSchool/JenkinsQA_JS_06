/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  it('<Main Panel> Verify the "Configure a cloud" link in the "Set up a distributed build" section', function () {
    cy.get('.content-block a[href="configureClouds"]')
      .should("be.visible")
      .should("have.text", "Configure a cloud")
      .click();
    cy.url().should("include", "configureClouds");
    cy.get(".jenkins-app-bar__content > h1").should(
      "have.text",
      "Configure Clouds"
    );
  });
});
