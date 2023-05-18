// <reference types=“cypress”/>

function createOrgFolder(orgFolderName) {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get('#name').type(orgFolderName);
    cy.get('.jenkins_branch_OrganizationFolder').click();
    cy.get('#ok-button').click();
    cy.get('button[name="Submit"]').click();
    cy.get('#breadcrumbBar li:first-child').click();
}

describe('orgFolderConfigurate', () => {
    const orgFolderName = 'OrgFolderTest';
    const description = 'The description was added to the organization folder.';
    const disableMessage = 'This Organization Folder is currently disabled';

    it('AT_17.01.002 | Add description to the Organization Folder via Configure', () => {
        createOrgFolder(orgFolderName);
        cy.get('.jenkins-table__link.model-link.inside').click();
        cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
        cy.get('#main-panel > form > div.config-table > div.jenkins-form-item.tr > div.setting-main > textarea').type(description);
        cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary').click();
        cy.get('#view-message').should('have.text', description);
    });

    it('AT_17.01.001 | Change status folder to disable', () => {
        createOrgFolder(orgFolderName, '');
        cy.get('.jenkins-table__link.model-link.inside').click();
        cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
        cy.get('.jenkins-toggle-switch__label').click();
        cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary').click();
        cy.get('#enable-project').should('contain', disableMessage);
    });
});