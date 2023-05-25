/// <reference types="cypress" />

describe("Header Icon 1", () => {
  it("AT_01.01 _021| Verify Head Icon is clickable.", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#jenkins-head-icon").should("be.visible");
    cy.get("#jenkins-head-icon").click();
    cy.url().should("eq", "http://localhost:8080/");
  });

    it('AT_01.01_044 | <Header> Head Icon is visible and and clickable', ()=>{
      cy.get('#jenkins-home-link').should('be.visible')
      cy.get('#jenkins-home-link').click()
      cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/`)
    })
});
