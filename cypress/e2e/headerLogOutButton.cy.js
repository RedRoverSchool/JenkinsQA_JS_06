/// <reference types="cypress"/>

describe('Header | Log Out Button', () => {
    
    it('AT_01.08_013| Verify Header Log out button', () => {
        cy.get('#page-header > div.login.page-header__hyperlinks > a:nth-child(4)').contains('log out').click()
        cy.url().should('include',`http://localhost:${Cypress.env('local.port')}/login?from=%2F`)
    })
})