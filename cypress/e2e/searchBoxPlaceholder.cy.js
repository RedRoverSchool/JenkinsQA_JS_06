/// <reference types="cypress" />
describe('searchBoxPlaceholder', () => {

    it.skip('AT_01.02.18_Header_Search_box', () => {
        cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
    })
})

