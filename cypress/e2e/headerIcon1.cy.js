/// <reference types="cypress" />

describe("Header | Head Icon", () => {
  it("AT_01.01 _021| Verify Head Icon is clickable.", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#jenkins-head-icon").should("be.visible");
    cy.get("#jenkins-head-icon").click();
    cy.url().should("eq", "http://localhost:8080/");
  });
});
