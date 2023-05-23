/// <reference types="cypress"/>

import homepageMainPanel from "../fixtures/homepageMainPanel";

describe("HomepageMainPanel'sHeadingsAndLinks", () => {
  it('AT_02.07.007 | <Main Panel> Verify the "Learn more about distributed builds" link', function () {
    cy.get(".content-block__help-link")
      .should("be.visible")
      .and("have.text", homepageMainPanel.helpLinkName)
      .and("have.attr", "target", "_blank")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("eq", homepageMainPanel.helpLinkUrl);
  });
});
