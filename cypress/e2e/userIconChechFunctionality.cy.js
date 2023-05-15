/// <reference types="cypress"/>

describe('Header | User icon', () => {
    it('The user icon is visible and clickable', () => {
        cy.get('[href="/user/dariamas"]').should('exist').click()
        cy.get('.icon-lg').should('exist')
    })
    it('Check dropdown | Builds option', ()=>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/dariamas/builds"]').click()
        cy.get('[name=skip2content]').should('exist')
    })
    it('Check dropdown | Configure option', ()=>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/dariamas/configure"]').click()
        cy.url().should('includes','/user/dariamas/configure')
    })
    it('Check dropdown | My views option', ()=>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/dariamas/my-views"]').click()
        cy.url().should('includes','/user/dariamas/my-views/view/all/')
    })
    it('Check dropdown | Credential option', ()=>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('[href="/user/dariamas/credentials"]').click()
        cy.get('.jenkins-app-bar__content').should('exist')
    })
})
