/// <reference types="cypress"/>

describe("Homepage > Main Panel", () => {
  const hpSectionHeadings = [
    "Start building your software project",
    "Set up a distributed build",
  ];

  it("Main panel > Verify sectons", function () {
    cy.get(".empty-state-block").find("section").should("have.length", 2);
    cy.get(".empty-state-block > section > h2").each(($el, idx) => {
      expect($el.text()).to.be.equal(hpSectionHeadings[idx]);
    });
  });
});
