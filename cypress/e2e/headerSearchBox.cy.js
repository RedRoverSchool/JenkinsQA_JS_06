/// <reference types="cypress"/>

describe('Header Search Box', () => {
    
    it('AT_01.02_003 | Verify a placeholder text “Search (CTRL+K)" in input field Search box', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
    });
})