/// <reference types="cypress"/>

import homepageMainPanel from "../fixtures/homepageMainPanel";

describe("HomepageMainPanelSections", () => {
  it("AT_02.07.003| <Homepage> Main panel > Verify sections", function () {
    cy.get(".empty-state-block").find("section").should("have.length", 2);
    cy.get(".empty-state-block > section > h2").each(($el, idx) => {
      expect($el.text()).to.be.equal(homepageMainPanel.sections[idx]);
    });
  });
});
