/// <reference types="cypress"/>

describe("AT_04.03_010| Breadcrumbs| My view page |Verify that user can open selected item", () => {
    it('Create a new Organization Folder', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('Example');
        cy.get('.jenkins_branch_OrganizationFolder').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
        cy.get('#breadcrumbBar li:first-child').click();

        cy.get('#page-header > div.login.page-header__hyperlinks > a.model-link > button').click({force: true})
        cy.get('#breadcrumb-menu > div.yui-menu-shadow').click({force: true})
        cy.get('#job_Example > td:nth-child(3) > a > span').click()
        cy.get('#main-panel > h1').should('be.visible')
    })
    
  });
  
  