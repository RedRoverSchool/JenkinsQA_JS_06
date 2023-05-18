/// <reference types="cypress"/>
describe('Search field validation', () => {
    it('AT_01.02.018 | search field validation', () =>{
        cy.get('#search-box').should('be.visible')
        .should('have.attr', 'placeholder', 'Search (CTRL+K)')
    
    })
})