/// <reference types="cypress"/>

describe('New Item | Create a new Multibranch Pipeline', ()=>{
    it('Create a new Multibranch Pipeline', ()=>{
        cy.get(':nth-child(1) > .task-link-wrapper > .task-link').click()
        cy.url().should('includes','/view/all/newJob')
        cy.get('#name').type('Jenkins JS Project')
        cy.contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.contains('Jenkins JS Project').should('be.visible')
        cy.contains('Dashboard').click()
        cy.url().should('includes','http://localhost:8080/')
    })
})