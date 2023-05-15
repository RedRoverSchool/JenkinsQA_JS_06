/// <reference types="cypress" />
describe('Header > User icon', ()=>{
    it('Verify User icn and clicks on drop dawn menu', () => {
        cy.get('[href="/user/admin"]').should('exist').click()
        cy.get('.icon-lg').should('exist')
    })
    it('check dropDown menu | builds', () => {
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/admin/builds"]').click()
        cy.get('[name= skip2content]').should('exist')

    })
    it('check dropDown menu | configure', () => {
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/admin/configure"]').click()
        cy.url().should('include', '/user/admin/configure')

    })
    it('check dropDown menu | my views', () => {
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/admin/my-views"]').click()
        cy.url().should('include', '/user/admin/my-views/view/all/')


    })
    it('check dropDown menu | credentials', () => {
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/admin/credentials"]').click()
        cy.url().should('include', '/user/admin/credentials/')


    })
})