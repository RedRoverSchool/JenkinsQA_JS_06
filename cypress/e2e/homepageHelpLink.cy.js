/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  it('<Main Panel> Verify the "Learn more about distributed builds" link', function () {
    cy.get(".content-block__help-link")
      .should("be.visible")
      .should("have.text", "Learn more about distributed builds")
      .should("have.attr", "target", "_blank")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should(
      "eq",
      "https://wiki.jenkins.io/display/JENKINS/Distributed+builds"
    );
  });
});
