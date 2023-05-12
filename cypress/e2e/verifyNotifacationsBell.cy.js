/// <reference types="cypress"/>

describe('Header | Notifications icon', () => {
    it('Verify notifications icon', function () {
        cy.get('#visible-am-button').click()
        cy.get('#visible-am-list a[href="/manage"]').should('have.text', 'Manage Jenkins')
    })
})