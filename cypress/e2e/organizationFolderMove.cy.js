/// <reference types="cypress"/>

import orgFolderConfigure from '../fixtures/orgFolderConfigure.json'
import createFolder from '../fixtures/createFolder.json'

const PORT = Cypress.env("local.port")

function createOrgFolder(orgFolderNew) {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get('#name').type(orgFolderConfigure.orgFolderName);
    cy.get('.jenkins_branch_OrganizationFolder').click();
    cy.get('#ok-button').click();
    cy.get('button[name="Submit"]').click();
    cy.get('#breadcrumbBar li:first-child').click();
}
function createFolder1(folderNew) {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get('#name').type(createFolder.folderName);
    cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click();
    cy.get('#ok-button').click();
    cy.get('button[name="Submit"]').click();
    cy.get('#breadcrumbBar li:first-child').click();
}

describe.skip('Organization_folder_move', () => {
    
    beforeEach(() => {
        createFolder1()
        createOrgFolder()
    });

    it.skip('AT_17.04_002 | Move Organization Folder into Folder', () => {
        let linkBefore = (`http://localhost:${PORT}/job/${orgFolderConfigure.orgFolderName}/`)
        cy.get(`a[href="job/${orgFolderConfigure.orgFolderName}/"]`).click()
        cy.get('#breadcrumbBar').should('contain', orgFolderConfigure.orgFolderName)
        cy.get('#jenkins-home-link').click()
        cy.get(`a[href="job/${orgFolderConfigure.orgFolderName}/"] .jenkins-menu-dropdown-chevron`).click({ force: true })
        cy.get(`a[href="/job/${orgFolderConfigure.orgFolderName}/move"]`).click()
        cy.get('select').select(`Jenkins » ${createFolder.folderName}`).should('have.value', `/${createFolder.folderName}`)
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-home-link').click()
        cy.get(`a[href="job/${createFolder.folderName}/"]`).click()
        cy.get(`a[href="job/${orgFolderConfigure.orgFolderName}/"]`).click()
        cy.url().should('include', `http://localhost:${PORT}/job/${createFolder.folderName}/job/${orgFolderConfigure.orgFolderName}/`)
            .and('not.deep.equal', 'linkBefore')
    });

})