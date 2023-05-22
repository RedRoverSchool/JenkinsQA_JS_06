// <reference types=“cypress”/>
import orgFolderConfigure from '../fixtures/orgFolderConfigure.json'

function createOrgFolder(orgFolderName) {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get('#name').type(orgFolderConfigure.orgFolderName);
    cy.get('.jenkins_branch_OrganizationFolder').click();
    cy.get('#ok-button').click();
    cy.get('button[name="Submit"]').click();
    cy.get('#breadcrumbBar li:first-child').click();
}

describe('orgFolderConfigurate', () => {

    it('AT_17.01.002 | Add description to the Organization Folder via Configure', () => {
        createOrgFolder(orgFolderConfigure.orgFolderName);
        cy.get('.jenkins-table__link.model-link.inside').click();
        cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
        cy.get('textarea[name="_.description"]').type(orgFolderConfigure.description);
        cy.get('#bottom-sticker button[name="Submit"]').click();
        cy.get('#view-message').should('have.text', orgFolderConfigure.description);
    });

    it('AT_17.01.001 | Change status folder to disable', () => {
        createOrgFolder(orgFolderConfigure.orgFolderName, '');
        cy.get('.jenkins-table__link.model-link.inside').click();
        cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
        cy.get('.jenkins-toggle-switch__label').click();
        cy.get('#bottom-sticker button[name="Submit"]').click();
        cy.get('#enable-project').should('contain', orgFolderConfigure.disableMessage);
    });
});