/// <reference types="cypress"/>

import homePage from '../fixtures/homePage.json'

const userName = Cypress.env("local.admin.username").toLowerCase();

describe("US_01.06 Header My views menu link", () => {
    it('TC_01.06_002 Header My views menu link', () => {
        cy.get('#side-panel').as('sidePanel');
        cy.get('@sidePanel').find('[href="/me/my-views"]').click();    
        cy.url().should('eq',`http://localhost:${Cypress.env('local.port')}/me/my-views/view/all/`);
        cy.get('@sidePanel').find('[href$="newJob"]').should('be.visible');
        cy.get('@sidePanel').find('[href="/asynchPeople/"]').should('be.visible');
        cy.get('@sidePanel').find('[href$="builds"]').should('be.visible');
    })
    it('TC_01.06.05 Header My views menu link',()=>{
        cy.get('a[href="/user/admin"] .jenkins-menu-dropdown-chevron').click({force: true});
        cy.get('[href="/user/admin/my-views"]').click();
        cy.get('.content-block').should('have.text','Create a job');
        cy.get('[href="/user/admin/my-views/view/all/newJob"]').should('have.text','New Item');
        cy.get('[href="/asynchPeople/"] .task-link-text').should('have.text','People');
        cy.get('[href="/user/admin/my-views/view/all/builds"]').should('have.text','Build History');
    })

    it.skip('AT_01.06_004 | Header | Verify "My Views" link in user dropdown-menu is clickable', () =>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitemlabel').contains('My Views').click()
        cy.url().should('includes', '/my-views/view/all/')
        cy.get(`[href="/user/${userName}/my-views/"]`).should('have.text', 'My Views')
    })

    it.skip('AT_01.06.007 | Header User menu My views link', function () {
        cy.get('header .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('a[href="/user/admin/my-views"]').click();
        cy.url().should('includes', homePage.endPointUrl[4]);
        cy.get('#breadcrumbs li').contains(homePage.dashboardDropdownItems[4]).should('be.visible');
    })

    it('AT_01.06.008 | <Header>My views menu link/link redirect works', function() {
        cy.get('.page-header__hyperlinks a .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitemlabel').contains('My Views').click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/${userName}/my-views/view/all/`)
        cy.get('#side-panel').should('be.visible')
    })

    it.skip('AT_01.06_009 | Header>Link "My Views" in the “User” dropdown-menu is visible and redirects', () => {
        cy.get('#page-header .model-link .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('#breadcrumb-menu-target a[href*="my-views"]').should('be.visible').click()
        cy.location('pathname').should('eq', `/user/${userName}/my-views/view/all/`)
        cy.get('#page-body #description div').should('include.text', homePage.myViewsH1)
  })

});
