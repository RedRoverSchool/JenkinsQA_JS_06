/// <reference types="cypress"/>

describe('<New Item> Items Names and Icons', () => {

    it('TC_05.08_002 | <New Item>Verify that page with New Items displayed after click on the button New Item', () => {
        cy.contains('New Item').click()
        cy.get('.h3').should('have.text', 'Enter an item name')
    });

    it('AT_05.08_008 | New Item | Redirection to the "Create new item" page', () => {
        cy.get('a[href="/view/all/newJob"]').should('have.text', 'New Item').click()
        cy.url().should('include', '/view/all/newJob')
        cy.get('.h3').should('have.text', 'Enter an item name')
    });
  });