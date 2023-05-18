/// <reference types="cypress"/>

let userDropdown = '.jenkins-menu-dropdown-chevron:nth-child(3)';
 
describe("breadcrumbsMyViewsPage", () => {
    it('04.03_001 Verify that user can open selected Pipeline', () => {

        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testPipeline');
        cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob').click({ force: true });
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#breadcrumbBar li:first-child').click();
        cy.get(userDropdown).click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('a[href="job/testPipeline/"]').click()
        cy.get('#main-panel > h1').should('be.visible').should('include.text', "testPipeline")
    })
    
    it('04.03_002 Verify that user can open selected Folder', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testFolder');
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click({ force: true });
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get(userDropdown).click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('a[href="job/testFolder/"]').click()
        cy.get('#main-panel > h1').should('be.visible')
        cy.get('#main-panel > h1').should('include.text', "testFolder")
    })

    it('04.03_003 Verify that user can open selected Freestyle project', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testFreestyleProject');
        cy.get('.hudson_model_FreeStyleProject').click({ force: true });
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get(userDropdown).click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('#job_testFreestyleProject').click()
        cy.get('a[class="jenkins-table__link model-link inside"]').should('be.visible')
        cy.get('a[class="jenkins-table__link model-link inside"]').should('include.text', "testFreestyleProject")
    })
});

