///<reference types="cypress" />

import { folderName } from '../fixtures/createFolder.json'
import { nameOrganizationFolder } from '../fixtures/organizationFolderNames.json'

describe('moveOrganizationFolder', function () {

    beforeEach(() => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click()
        cy.get('#name').type(folderName)
        cy.get('#ok-button').click()
        cy.get('.jenkins-button--primary').click()
        cy.get('#jenkins-home-link').click()

        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.jenkins_branch_OrganizationFolder').click()
        cy.get('#name').type(nameOrganizationFolder)
        cy.get('#ok-button').click()
        cy.get('.jenkins-button--primary').click()
        cy.get('#jenkins-home-link').click()
    })
    
    it('AT_17.04_001 | Verify that user can move the organization folder through the Jenkins dashboard', function () {
        cy.get('a[href="job/TestFolder/"]').should('be.visible')
        cy.get('a[href="job/TestFolder/"]').click()
        cy.get('#main-panel h1').should('contain', folderName)
        cy.go('back')

        cy.get('a[href="job/testOrganizationFolder/"]').should('be.visible')
        cy.get('a[href="job/testOrganizationFolder/"]').click()
        cy.get('#main-panel h1').should('contain', nameOrganizationFolder)
        cy.go('back')

        cy.get('a[href="job/testOrganizationFolder/"]').realHover()
        cy.get('#job_testOrganizationFolder > td:nth-child(3) > a > button').click()
        cy.get('a[href="/job/testOrganizationFolder/move"]').click()
        cy.get('#main-panel > form > select').select('/TestFolder')
        cy.get('#main-panel > form > button').click()

        cy.get('a[href="/job/TestFolder/"].model-link').click()
        cy.get('#main-panel h1').should('contain', folderName)
        cy.get('a[href="job/testOrganizationFolder/"]').should('be.visible')
        cy.get('#jenkins-home-link').click()
        cy.get('.dashboard').should('not.have.text', nameOrganizationFolder)
    })
})