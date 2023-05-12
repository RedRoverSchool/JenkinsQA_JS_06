/// <reference types="cypress"/>
describe('People tab', ()=>{
    const endPoint = '/asynchPeople/'
    it('Verify redirection to the correct page',()=>{
        cy.get('#side-panel #tasks :nth-child(2) .task-icon-link').click()
        cy.url().should('include', endPoint)
    })
})