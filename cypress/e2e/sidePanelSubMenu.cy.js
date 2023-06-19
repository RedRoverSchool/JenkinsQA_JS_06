/// <reference types="cypress"/>

describe.skip('Dashboard', () => {

    it('Verify side panel has 5 items and they redirect to the appropriate pages', () => {
        cy.get('#side-panel .task').should('have.length', 5)
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
        cy.get('#jenkins-home-link').click()
        cy.get('a[href="/asynchPeople/"]').click()
        cy.url().should('include', '/asynchPeople/')
        cy.get('a[href="/view/all/builds"]').click()
        cy.url().should('include', '/view/all/builds')
        cy.get('a[href="/manage"]').click()
        cy.get('div h1').should('have.text', 'Manage Jenkins')
        cy.get('a[href="/me/my-views"]').click()
        cy.url().should('include', '/me/my-views/view/all/')
    })
})