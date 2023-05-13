/// <reference types="cypress"/>

describe('New Item', () => {

    it('Verify New Item has input field', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
        cy.get('.jenkins-input').should('be.visible')
    })
    
    it('AT_05.07 _002 | Verify +New Item button is clickable on the Main page', () => {
        cy.get('a[href ="/view/all/newJob"]').click()
        cy.url().should('eq', 'http://localhost:8080/view/all/newJob')
        cy.get('#name').should('be.visible')
    })
})