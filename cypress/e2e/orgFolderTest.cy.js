/// <reference types="cypress"/>

describe('<Organization Folder> Configurate Organization Folder', () => {
    const orgFolderName = 'OrgFolderTest';
    const description = 'The description was added to the organization folder.';

    before ('Create Organization Folder', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(orgFolderName);
        cy.get('.jenkins_branch_OrganizationFolder').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
        cy.get('#breadcrumbBar li:first-child').click();
    })

    it('Add description to the Organization Folder via Configurate', () => {
        cy.get('.jenkins-table__link.model-link.inside').click( {multiple: true} );
        cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
        cy.get('#main-panel > form > div.config-table > div.jenkins-form-item.tr > div.setting-main > textarea').type(description);
        cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary').click();
        cy.get('#view-message').should('be.visible', description);
    })

});