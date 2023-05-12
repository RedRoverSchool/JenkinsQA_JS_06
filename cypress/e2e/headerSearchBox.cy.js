/// <reference types="cypress"/>

describe('Header Search Box', () => {
    
    it('AT_01.02_003 | Verify a placeholder text “Search (CTRL+K)" in input field Search box', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
    });

    it('AT_01.02_001 | Verify that user navigate to Search Box documentation page', function () {
        cy.get('.main-search__icon-trailing').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/doc/book/using/searchbox/')
        cy.get('h1#search-box').should('contain.text', '\nSearch Box\n')
    });
})