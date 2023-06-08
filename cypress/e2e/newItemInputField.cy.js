/// <reference types="cypress"/>

import newItemNames from '../fixtures/newItemNames.json'

const PORT = Cypress.env("local.port");

describe('newItemInputField', () => {

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

    it.skip('AT_05.07_004 | New item page has Input field for text data', () => {
        cy.get('#side-panel a[href="/view/all/newJob"]').click()

        cy.get('div.header .h3').should('have.text', newItemNames.headerText)
        cy.get('div.header input').should('have.attr', 'type', 'text')
    })
})