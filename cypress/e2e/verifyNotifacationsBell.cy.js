/// <reference types="cypress"/>

describe('Header | Notifications icon', () => {
    it.skip('Verify notifications icon', function () {
        cy.get('#visible-am-button').click()
        cy.get('#visible-am-list a[href="/manage"]').should('have.text', 'Manage Jenkins')
    })

    it.skip('AT_01.10.004 | Header | Verify That Orange Notifications icon is Visible', () => {
        cy.get('#visible-am-insertion span').realHover()
        cy.get('#visible-am-insertion span').should('have.css','background-color','rgb(255, 152, 0)')
    })
})