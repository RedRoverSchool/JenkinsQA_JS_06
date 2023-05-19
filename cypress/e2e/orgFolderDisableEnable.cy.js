/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'

describe('Organization Folder Disable/Enable', () => {
    beforeEach(() => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projects.organizationFolder.name)
        cy.get('li.jenkins_branch_OrganizationFolder').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-name-icon').click()
    });

    it('AT_17.05.001 | Verify possibility to disable Organization Folder', () => {
        cy.get('#projectstatus').contains(projects.organizationFolder.name).click()
        cy.get('#disable-project button').click()
        cy.get('form#enable-project').should('contain', projects.organizationFolder.disable)
    });

    it('AT_17.05.002 | Verify possibility to enable Organization Folder', () => {
        cy.get('#projectstatus').contains(projects.organizationFolder.name).click()
        cy.get('#disable-project button').click()
        cy.get('form#enable-project').should('contain', projects.organizationFolder.disable)

        cy.get('#jenkins-name-icon').click()
        cy.get('#projectstatus').contains(projects.organizationFolder.name).click()
        cy.get('button.jenkins-button').click()

        cy.get('form#disable-project').should('have.text', projects.organizationFolder.disableBtn)
    });
});
