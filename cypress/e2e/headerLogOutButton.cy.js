/// <reference types="cypress"/>

describe('Header | Log Out Button', () => {
    
    it('Log Out button is visible', () => {
        cy.visit(`http://localhost:8080/`)
        cy.get('#page-header > div.login.page-header__hyperlinks > a:nth-child(4)')
    });

    it('Log Out button is clickable', ()=>{
        cy.get('#page-header > div.login.page-header__hyperlinks > a:nth-child(4)').click()
        cy.url().should('include',`http://localhost:8080/login?from=%2F`)
    })
})