/// <reference types="cypress"/>

describe('<Header> log out button', () => {
    it('Verify presence of log out button', function () {
        cy.get('div[class="login page-header__hyperlinks"] :nth-child(4)').should('have.text', 'log out')
    });

    it.skip('Verify logout button is visible and redirects to the login page', () => {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.get('#loginIntroDefault').should('be.visible')
    })

    it.skip('AT_01.08.12 | Header Log out button', () => {
        cy.get('a[href="/logout" ]')
            .should('be.visible')
            .click()
        cy.get('h1').should('have.text', 'Welcome to Jenkins!')
    })
})
