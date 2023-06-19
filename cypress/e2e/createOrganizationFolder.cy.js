/// <reference types="cypress"/>
import organizationFolder from '../fixtures/organizationFolderNames.json';
import header from '../fixtures/headers.json'

describe.skip('createOrganizationFolder', () => {
    it('AT_05.06_006 | <New Item > Create a new Organization Folder', function () {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('.h3').should('have.text', header.newItemHeader);
        cy.get('#name').type(organizationFolder.nameOrganizationFolder);
        cy.get('.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').click();
        cy.get('#ok-button').click();
        cy.get('#general').should('contain', header.generalHeader);
        cy.get('[name="Submit"]').click();
        cy.get('h1').should('contain', organizationFolder.nameOrganizationFolder);
        cy.get('#breadcrumbBar li:nth-child(1)').click();
        cy.get('#projectstatus').should('include.text', organizationFolder.nameOrganizationFolder);
    });

});