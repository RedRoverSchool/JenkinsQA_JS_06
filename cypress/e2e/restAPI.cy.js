/// <reference types="cypress" />

describe('AT_3.01_004 | Verify the link "Rest API"', () =>{
    it('Verify the link "Rest API"', () =>{
        cy.get('a[href="api/"]').should('exist').should('have.text','REST API').click()
        cy.url().should('includes','/api/')
    })

    it("AT_03.01_005 | <Footer> Check the link REST API", () => {
    cy.get('[href="api/"]').click();
    cy.url()
      .should("be.eq", `http://localhost:${Cypress.env('local.port')}/api/`)
    cy.get("div h1").should("have.text", "REST API");
    });
})