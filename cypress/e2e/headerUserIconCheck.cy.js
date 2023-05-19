///  <reference types="cypress"/>
describe('AT_01.03.022| Header User icon check', () => {
    it('AT_01.03.022| <Header>User icon check', () =>{
        cy.get('a[href="/user/admin"]').should('be.visible')
        cy.get('.page-header a .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.bd').should('be.visible')
        cy.get('a[href="/user/admin/configure"').click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/configure`)
       
    })
})