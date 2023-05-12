/// <reference types="cypress" />

describe('AT_6.01_003 | <People> Verify the "People" page', ()=>{
    it('Verify the "People" page', ()=>{
        cy.get('#side-panel #tasks :nth-child(2) .task-link-text').should('exist').should('have.text','People')
        cy.get('a[href="/asynchPeople/"]').click()
        cy.url().should('includes','/asynchPeople/')
    })
})