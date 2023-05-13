/// <reference types="cypress"/>

let userDropdown = '.jenkins-menu-dropdown-chevron:nth-child(3)';
let pipeline = '.org_jenkinsci_plugins_workflow_job_WorkflowJob';


describe("AT_04.03_001| Breadcrumbs| My view page |Verify that user can open selected item", () => {
    it('Verify that user can open selected item', () => {

        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testPipeline');
        cy.get(pipeline).click({ force: true });
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#breadcrumbBar li:first-child').click();
        cy.get(userDropdown).click({ force: true })
        cy.get('a[href="/user/admin/my-views"]').click()
        cy.get('a[href="job/testPipeline/"]').click()
        cy.get('#main-panel > h1').should('be.visible').should('include.text', "testPipeline")
    })
});



