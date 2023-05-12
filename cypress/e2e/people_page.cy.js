/// <reference types="cypress" />

describe('AT_6.01_003 | <People> Verify the "People" page', ()=>{
    it('Verify the "People" page', ()=>{
        cy.get('a[href="/asynchPeople/"]').should('exist').should('have.text','People').click()
        cy.url().should('includes','/asynchPeople/')
    })
})