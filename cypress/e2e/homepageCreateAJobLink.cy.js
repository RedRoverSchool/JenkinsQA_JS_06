/// <reference types="cypress"/>

import homepageMainPanel from /fixtures/homepageMainPanel

describe("Homepage > 'Create a job' link", () => {
  it('AT_02.07.004 | <Main Panel> Verify the "Create a job" link in the "Start building your software project" section', function () {
    cy.get('.content-block a[href="newJob"]')
      .should("be.visible")
      .should("have.text", homepageMainPanel.linkName)
      .click();
    cy.url().should("include", homepageMainPanel.createAJobEndPointUrl);
    cy.get(".add-item-name .h3").should("have.text", homepageMainPanel.addItemLabelName);
  });
});
