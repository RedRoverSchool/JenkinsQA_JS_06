/// <reference types="cypress"/>

describe.skip('Header Search Box', () => {

    it.skip('AT_01.02_004 | Verify a placeholder text "Search (Ctrl+K)" input field Search box', function () {
        cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
     });
})