/// <reference types="cypress" />

describe('AT_3.01_004 | Verify the link "Rest API"', () =>{
    it('Verify the link "Rest API"', () =>{
        cy.get('a[href="api/"]').should('exist').should('have.text','REST API').click()
        cy.url().should('includes','/api/')
    })
})