/// <reference types="cypress"/>

import homepageMainPanel from "../fixtures/homepageMainPanel";

describe("HomepageMainPanel'sHeadingsAndLinks", () => {
  it.skip('AT_02.07.007 | <Main Panel> Verify the "Learn more about distributed builds" link', function () {
    cy.get(".content-block__help-link")
      .should("be.visible")
      .and("have.text", homepageMainPanel.helpLinkName)
      .and("have.attr", "target", "_blank")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("eq", homepageMainPanel.helpLinkUrl);
  });

  it("AT_02.07.008|<Homepage>main panel and it's heading and sections", () => {
    cy.get('#main-panel').should('be.visible')
    cy.get('#main-panel .empty-state-block h1').should('have.text', homepageMainPanel.headingH1)
    cy.get('#main-panel .empty-state-section .h4').should('have.length', 2).each(($el, idx) => {
      expect($el.text()).to.be.equal(homepageMainPanel.sections[idx]);
    });
  })
});
