/// <reference types="cypress" />
import pages from "../fixtures/pages.json"

describe("Header Icon 1", () => {

  Cypress.Commands.add('navigateUserConfigurationPage', () => {
    cy.get('.login .model-link').should('be.visible');
    cy.get('#page-header .login a.model-link button.jenkins-menu-dropdown-chevron').realHover().click();
    cy.get('#breadcrumb-menu li.yuimenuitem a span').contains('Configure').click();
});

  Cypress.Commands.add('navigateJenkinsHeaderIcon', () => {
  cy.get("#jenkins-head-icon").should("be.visible");
    cy.get("#jenkins-head-icon").click();
});

  it("AT_01.01 _021| Verify Head Icon is clickable.", () => {
    cy.navigateUserConfigurationPage();
    cy.navigateJenkinsHeaderIcon();
    cy.title().should("eq", pages.dashboardPageTitle);
  });

    it.skip('AT_01.01_044 | <Header> Head Icon is visible and and clickable', ()=>{
      cy.get('#jenkins-home-link').should('be.visible')
      cy.get('#jenkins-home-link').click()
      cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/`)
    })
});
