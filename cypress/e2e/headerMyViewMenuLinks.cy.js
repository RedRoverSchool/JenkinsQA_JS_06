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

    it('AT_01.06_004 | Header | Verify "My Views" link in user dropdown-menu is clickable', () =>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitemlabel').contains('My Views').click()
        cy.url().should('includes', '/my-views/view/all/')
        cy.get(`[href="/user/${userName}/my-views/"]`).should('have.text', 'My Views')
    })

    it('AT_01.06.007 | Header User menu My views link', function () {
        cy.get('header .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('a[href="/user/admin/my-views"]').click();
        cy.url().should('includes', homePage.endPointUrl[4]);
        cy.get('#breadcrumbs li').contains(homePage.dashboardDropdownItems[4]).should('be.visible');
    })
});
