/// <reference types="cypress"/>
describe('Search field validation', () => {
    it.skip('AT_01.02.018 | search field validation', () =>{
        cy.get('#search-box').should('be.visible')
        .should('have.attr', 'placeholder', 'Search (CTRL+K)')
    
    })
})