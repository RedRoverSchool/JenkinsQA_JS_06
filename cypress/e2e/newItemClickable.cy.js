/// <reference types="cypress"/>

describe('New Item |Items Names and Icons', () => {
    it('New Item is clickable', function () {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.h3').should('have.text', 'Enter an item name')

    })
})