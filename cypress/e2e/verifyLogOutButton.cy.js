/// <reference types="cypress"/>

describe('<Header> Log out button',()=>{
    it('Verify presence of log out button',()=>{
        cy.get('div[class="login page-header__hyperlinks"] :nth-child(4)').should('have.text','log out')
    })
})