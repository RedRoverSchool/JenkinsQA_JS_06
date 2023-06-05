/// <reference types="cypress"/>

import projects from "../fixtures/projects.json";

const PORT = Cypress.env("local.port");

describe("Footer | Verify Link REST API", () => {
    
  it.skip("Rest API link redirecting to the correct page", () => {
    cy.get('a[href="api/"]').click();
    cy.url().should("includes", "/api/");
  });

  it.skip("AT_3.01.003 | Footer | Verify REST API Redirect", () => {
    cy.get('a[href="api/"]').click();
    cy.url().should("include", `http://localhost:${PORT}/api/`);
    cy.get("#main-panel h1").should("have.text", projects.api.text);
  });
});
