/// <reference types="cypress"/>

const PORT = Cypress.env("local.port");

describe('New Item', () => {

    it('Verify New Item has input field', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
        cy.get('.jenkins-input').should('be.visible')
    })
    
    it('AT_05.07 _002 | Verify New Item page contains input field', () => {
        cy.get('a[href ="/view/all/newJob"]').click()
        cy.url().should('include', `http://localhost:${PORT}/view/all/newJob`)
        cy.get('#name').should('be.visible')
    })

    it("AT_05.07_003 | New item, Input field visible", () => {
        cy.get("a[href='/view/all/newJob']").click();
        cy.url().should('include', '/view/all/newJob');
        cy.get("input[id='name']").should("be.visible");
    });
})