/// <reference types="cypress"/>


describe('Check seach box', () => {
    
    it.skip('Check placeholder text "Search (CTRL+K)"', () => {
        cy.visit("http://localhost:8080/")
        cy.get('input#search-box')
        .should('have.attr', 'placeholder', 'Search (CTRL+K)')
        .should('be.visible')
    });
});