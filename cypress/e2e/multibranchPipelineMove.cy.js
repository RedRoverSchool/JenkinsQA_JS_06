/// <reference types="cypress"/>

import pipelineName from "../fixtures/pipelineName.json"
import folderName from "../fixtures/organizationFolderNames.json"
import itemName from "../fixtures/newItemNames.json"

function moveMPusingDD() {
    cy.get(`a[href="job/${pipelineName.namePipeline}/"]`).realHover()
    cy.get(`#job_${pipelineName.namePipeline} .jenkins-menu-dropdown-chevron`).click()
    cy.get('a[href$=move]').click()
    cy.get('.setting-input').select(`Jenkins » ${folderName.nameOrganizationFolder}`)
    cy.get('.jenkins-button').click()
}

function moveMPusingLS() {
    cy.get(`a[href="job/${pipelineName.namePipeline}/"]`).click()
    cy.get('a[href$=move]').click()
    cy.get('.setting-input').select(`Jenkins » ${folderName.nameOrganizationFolder}`)
    cy.get('.jenkins-button').click()
}

describe('Multibranch Pipeline - Move Multibranch Pipeline', function () {

    beforeEach('Create the Multibranch Pipeline and the folder', function () {
        cy.get('.content-block a[href=newJob]').click()
        cy.get('#name').type(pipelineName.namePipeline)
        cy.get('.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').click()
        cy.get('#ok-button').click()
        cy.get('#jenkins-home-link').click()
        cy.get('.task-link-wrapper a[href$=newJob]').click()
        cy.get('#name').type(folderName.nameOrganizationFolder)
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click()
        cy.get('#ok-button').click()
        cy.get('#jenkins-home-link').click()
    })

    it('AT_16.04 _001| Verify that the Multibranch Pipeline is moved to an existing folder using dropdown', function () {
        moveMPusingDD()
        cy.get('#jenkins-home-link').click()
        cy.get(`a[href="job/${folderName.nameOrganizationFolder}/"]`).click()
        cy.get('#main-panel h1').should('include.text', folderName.nameOrganizationFolder)

        cy.get('.icon-pipeline-multibranch-project').should('have.attr', 'title', itemName.projectNames[4])
        cy.get('.jenkins-table__link').should('have.text', pipelineName.namePipeline)
    });

    it('AT_16.04 _002| Verify that the moved Multibranch Pipeline (using drop down) does not exist on the list of projects on the home page', function () {
        moveMPusingDD()
        cy.get('#jenkins-home-link').click()
        cy.get(`#job_${pipelineName.namePipeline}`).should('not.exist')
    });

    it('AT_16.04 _003| Verify that the Multibranch Pipeline is moved to an existing folder using the left sidebar', function () {
        moveMPusingLS()
        cy.get('#jenkins-home-link').click()
        cy.get(`a[href="job/${folderName.nameOrganizationFolder}/"]`).click()
        cy.get('#main-panel h1').should('include.text', folderName.nameOrganizationFolder)

        cy.get('.icon-pipeline-multibranch-project').should('have.attr', 'title', itemName.projectNames[4])
        cy.get('.jenkins-table__link').should('have.text', pipelineName.namePipeline)
    });

    it('AT_16.04 _004| Moving the Multibranch Pipeline to an existing folder from the left sidebar', function () {
        cy.get('#jenkins-home-link').click()
        cy.get(`a[href="job/${pipelineName.namePipeline}/"]`).click()
        cy.get('a[href$="move"]').click()
        cy.get('.setting-input').select(`Jenkins » ${folderName.nameOrganizationFolder}`)
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-home-link').click()
        cy.get(`a[href="job/${folderName.nameOrganizationFolder}/"]`).click()
        cy.get('#main-panel h1').should('include.text', folderName.nameOrganizationFolder)
        cy.get('.icon-pipeline-multibranch-project').should('have.attr', 'title', itemName.projectNames[4])
        cy.get('.jenkins-table__link').should('have.text', pipelineName.namePipeline)
    });

});
