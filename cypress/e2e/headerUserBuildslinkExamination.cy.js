/// reference types="cypress"/>
describe('AT_01.04.08|Header Verify User Builds link', () =>{
    it('AT_01.04.08|Header Verify User Builds link', ()=> {
       cy.get('.page-header a .jenkins-menu-dropdown-chevron').realHover().click()
       cy.get(`a[href="/user/${Cypress.env('local.admin.username')}/builds"]`).click()
       cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/builds`) 
       cy.get('#projectStatus').should('be.visible')
       cy.get('#side-panel').should('be.visible')
       cy.get('a[href="/user/admin/credentials"]').click()
       cy.url().should('eq', `http://localhost:${Cypress.env("local.port")}/user/admin/credentials/`)
    })
})