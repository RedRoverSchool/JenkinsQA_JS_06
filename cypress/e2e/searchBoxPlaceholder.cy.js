/// <reference types="cypress" />
describe ('<Header> Search box', ()  => {

it ('01.02 | <Header> Search box',() => {
cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
})
})

