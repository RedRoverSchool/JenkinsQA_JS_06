/// <reference types="cypress"/>

import items from '../fixtures/items.json'
import userMenuItems from '../fixtures/userIconMenuItems.json'

 
describe("breadcrumbsMyViewsPage", () => {
    it('04.03_001 Verify that user can open selected Pipeline', () => {

        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testPipeline');
        cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#breadcrumbBar li:first-child').click();
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('a[href="job/testPipeline/"]').click()
        cy.get('#main-panel > h1')
          .should('be.visible')
          .and('include.text', "testPipeline")
    })
    
    it('04.03_002 Verify that user can open selected Folder', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testFolder');
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('a[href="job/testFolder/"]').click()
        cy.get('#main-panel > h1')
          .should('be.visible')
          .and('include.text', "testFolder")
    })

    it('04.03_003 Verify that user can open selected Freestyle project', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testFreestyleProject');
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('#job_testFreestyleProject').click()
        cy.get('a[class="jenkins-table__link model-link inside"]')
          .should('be.visible')
          .and('include.text', "testFreestyleProject")
    })
    it('04.03_007 Verify that user can open selected Multi-configuration project', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testMulti Configuration Project');
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('a[class="jenkins-table__link model-link inside"] span')
          .contains('testMulti Configuration Project')
          .click()
        cy.get('h1[class="matrix-project-headline page-headline"]')
          .should('be.visible')
          .and('include.text', "testMulti Configuration Project")
    })
    it('04.03_008 Verify that user can open selected Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('testMultiBranch Pipeline');
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({ force: true })
        cy.get('.yuimenuitem').contains("My Views").click()
        cy.get('a[class="jenkins-table__link model-link inside"] span')
          .contains('testMultiBranch Pipeline')
          .click()
        cy.get('h1[class="matrix-project-headline page-headline"]')
          .should('be.visible')
          .and('include.text', "testMultiBranch Pipeline")
    })

    it('AT_04.03.009|Verify that the user can open the selected Organization Folder', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(items.organizationFolderName[0]);
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains(userMenuItems.userMenuItems[2]).click()
        cy.get('a[class="jenkins-table__link model-link inside"] span')
          .contains(items.organizationFolderName[0])
          .click()
        cy.get('#main-panel')
          .should('be.visible')
          .and('include.text', items.organizationFolderName[0])
    })

});

