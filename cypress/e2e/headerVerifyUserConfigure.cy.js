/// <reference types="cypress"/>
describe('AT_01.05.10 | Header Verify User configure', () =>{
    it('AT_01.05.10 | Header Verify User configure', () =>{
        cy.get('.page-header__hyperlinks a .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get(`a[href='/user/${Cypress.env("local.admin.username")}/configure']`).click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/configure`)
        cy.get(':nth-child(1)>.setting-main>.jenkins-input').should('have.value', 'admin')
    })
})