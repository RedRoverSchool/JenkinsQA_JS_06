/// <reference types="cypress"/>


describe('Check seach box', () => {
    
    it('Check placeholder text "Search (CTRL+K)"', () => {
        cy.visit("http://localhost:8080/")
        cy.get('input#search-box')
        .should('have.attr', 'placeholder', 'Search (⌘+K)')
        .should('be.visible')
    });
});