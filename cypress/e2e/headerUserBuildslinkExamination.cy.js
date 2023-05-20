/// reference types="cypress"/>
describe('AT_01.04.08|Header User Builds link examination', () =>{
    it('AT_01.04.08|Header User Builds link examination', ()=> {
       cy.get('.page-header a .jenkins-menu-dropdown-chevron').realHover().click()
       cy.get(`a[href="/user/admin/builds"]`).click()
       cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/${Cypress.env('local.admin.username')}/builds`) 
       cy.get('#projectStatus').should('be.visible')
       cy.get('#side-panel').should('be.visible')
       cy.get(`a[href="/user/${Cypress.env('local.admin.username')}/credentials"]`).click()
       cy.url().should('eq', `http://localhost:${Cypress.env("local.port")}/user/${Cypress.env('local.admin.username')}/credentials/`)
    })
})