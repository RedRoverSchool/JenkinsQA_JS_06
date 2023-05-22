/// <reference types="cypress"/>

import items from '../fixtures/items.json'
import userMenuItems from '../fixtures/userIconMenuItems.json'

 
describe("breadcrumbsMyViewsPage", () => {
    it('AT_04.03_001|<Breadcrumbs>My Views page > Verify that user can open selected Pipeline', () => {

        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(items.pipelineName);
        cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#breadcrumbBar li:first-child').click();
        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains(userMenuItems.userMenuItems[2]).click()
        cy.get('a[href="job/testPipeline/"]').click()
        cy.get('#main-panel > h1')
          .should('be.visible')
          .and('include.text', items.pipelineName)
    })
    
    it('AT_04.03_002| <Breadcrumbs>My Views page > Verify that the user can open the selected Folder', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(items.folderName);
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains(userMenuItems.userMenuItems[2]).click()
        cy.get('a[href="job/testFolder/"]').click()
        cy.get('#main-panel > h1')
          .should('be.visible')
          .and('include.text', items.folderName)
    })

    it('AT_04.03_003 |<Breadcrumbs>My Views page > Verify that the user can open the selected Freestyle project', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(items.freestyleProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains(userMenuItems.userMenuItems[2]).click()
        cy.get('#job_testFreestyleProject').click()
        cy.get('a[class="jenkins-table__link model-link inside"]')
          .should('be.visible')
          .and('include.text', items.freestyleProjectName)
    })

    it('AT_04.03_007 | Verify that the user can open the selected Multi-configuration project', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(items.multiConfigurationProjectName);
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains(userMenuItems.userMenuItems[2]).click()
        cy.get('a[class="jenkins-table__link model-link inside"] span')
          .contains(items.multiConfigurationProjectName)
          .click()
        cy.get('h1[class="matrix-project-headline page-headline"]')
          .should('be.visible')
          .and('include.text', items.multiConfigurationProjectName)
    })

    it('AT_04.03.008 | Verify that the user can open the selected Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(items.multiBranchPipelineName);
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();

        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains(userMenuItems.userMenuItems[2]).click()
        cy.get('a[class="jenkins-table__link model-link inside"] span')
          .contains(items.multiBranchPipelineName)
          .click()
        cy.get('h1[class="matrix-project-headline page-headline"]')
          .should('be.visible')
          .and('include.text', items.multiBranchPipelineName)
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

