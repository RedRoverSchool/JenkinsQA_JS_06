/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'
import descriptionOrgFolder from '../fixtures/descriptionOrgFolder.json'

const folderName = 'Test'

describe('<New Item> Create a new Organization Folder', () => {
    
    it('New Item > Create a new Organization Folder by [+New Item]', function () {
        cy.contains('New Item').click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/view/all/newJob`)

        cy.get("#name").type(folderName)

        cy.contains("Organization Folder").click()

        cy.get('#ok-button')
        .should('be.visible')
        .click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/job/${folderName}/configure`)

        cy.contains('Save').click()

        cy.get('#main-panel > h1').should('contain', folderName)

        cy.get(':nth-child(1) > .model-link').click()

        cy.get('#job_Test .jenkins-table__link')
        .should('have.text', folderName)
    })

    it('AT_05.06_005| Create a new Organization Folder with description', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type(projects.organizationFolder.name)
        cy.get('span.label').contains('Organization Folder').click()
        cy.get('#ok-button').click()
        cy.get('textarea[name="_.description"]')
          .click()
          .type(descriptionOrgFolder.addDescriptionOrgFolder)
        cy.get('button[name="Submit"]').click()
        cy.get(':nth-child(1) > .model-link').click()
        cy.get(".jenkins-table__link > span").should("have.text", projects.organizationFolder.name) 
    })

    it('AT_05.06_007| Create a new Organization Folder with nama and description', () => {
        cy.get('#side-panel a[href="/view/all/newJob"]').click();
        cy.get('.add-item-name input[name=name]').type(projects.forOrganizationFolder.name);
        cy.get('#j-add-item-type-nested-projects [class$=OrganizationFolder]').click();
        cy.get('#ok-button').click();
        cy.get('#scan-organization-folder-triggers').should('be.visible');
        cy.get('form[name=config] input[name$=displayNameOrNull]').type(projects.forOrganizationFolder.displayName);
        cy.get('form[name=config] textarea[name$=description]').type(projects.forOrganizationFolder.Description);
        cy.get('button[name=Submit]').click();
        cy.get('#main-panel h1').should('have.text',`\n    ${projects.forOrganizationFolder.displayName}\n  `);
    })
    
})