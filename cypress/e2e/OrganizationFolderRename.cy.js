/// <reference types="cypress"/>

import organizationFolderNames  from "../fixtures/organizationFolderNames.json";
import messages from "../fixtures/messages.json"

describe('Rename existing Organization Folder', () => {
    beforeEach(() => {
        cy.get('a[href$="/newJob"]').click()
        cy.get('.jenkins-input').type(organizationFolderNames.nameOrganizationFolder);
        cy.get('[class="label"]').contains('Organization Folder').click();
        cy.get('button[type=submit]').should('be.enabled').click();
        cy.url().should('include', `/${organizationFolderNames.nameOrganizationFolder}/configure`);
        cy.get('button[name=Submit]').click();
        cy.get('[class="model-link"]').contains('Dashboard').click();
    });

    it('Rename Organization Folder using dropdown menu_positive', ()=> {
        cy.get('a[href^="job/"').realHover();
        cy.get('td > a [class$="dropdown-chevron"]').click();
        cy.get('li > a > span').contains('Rename').click();
        cy.get('.jenkins-input').clear().type(organizationFolderNames.newOrganizationFolder);
        cy.get('button[name=Submit]').click();

        cy.url().should('include', `/job/${organizationFolderNames.newOrganizationFolder}`);
        cy.get('h1').contains(`${organizationFolderNames.newOrganizationFolder}`);
    });

    it('Rename Organization Folder using left side menu_positive', ()=> {
        cy.get('a[href^="job/"').click()
        cy.get('#tasks > div:nth-child(8)>span').contains('Rename').click()
        cy.get('.jenkins-input').clear().type(organizationFolderNames.newOrganizationFolder);
        cy.get('button[name=Submit]').click();

        cy.url().should('include', `/job/${organizationFolderNames.newOrganizationFolder}`);
        cy.get('h1').contains(`${organizationFolderNames.newOrganizationFolder}`);
    });

    it('Rename Organization Folder with the same name', () => {
        cy.get('[href^="job"]').realHover();
        cy.get('[href^="job"] > button').click();
        cy.get('[href$="rename"]').click();
        cy.get('[name="Submit"]').click();
        cy.get('#main-panel h1').should('have.text', 'Error');
        cy.get('#main-panel p').should(($p) => {
            expect($p.text().trim()).equal(messages.renameErrorMessage.message);
          });
    });

    it("Rename Organization Folder the folder page", () => {
        cy.get("[class^='jenkins-table__link']").click();
        cy.get("[href$='confirm-rename']").click();
        cy.get("input[name='newName']").clear().type(organizationFolderNames.newOrganizationFolder);
        cy.get("button[name='Submit']").click();
        cy.get("#breadcrumbs > li:nth-of-type(1)").click();
        cy.get("[class*='jenkins-table__link']").should("have.text", organizationFolderNames.newOrganizationFolder);

    })
    it('AT_17.02.05_ | <Organization Folder> Verify the Ability to Rename a Organization Folder',()=>{
        Cypress.Commands.add('createFolder',()=>{
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').should('be.visible').type(organizationFolderNames.nameNewFolder)
        cy.get('[class="label"]').contains('Organization Folder').click()
        cy.get('.btn-decorator').click()
        cy.get('.jenkins-button.jenkins-button--primary').click()
    })
    cy.createFolder()
        cy.get('li [href="/"]').click()
        cy.get('a[href^="job/"]').contains(organizationFolderNames.nameNewFolder).realHover()
        cy.get(`[href="job/${organizationFolderNames.nameNewFolder}/"]>button`).click()
        cy.get('[href="/job/newFolder/confirm-rename"]').contains('Rename').click()
        cy.get('[checkdependson="newName"]').type(organizationFolderNames.nameOrganizationFolder)
        cy.get('[name="Submit"]').click()
        cy.get('#main-panel h1').should('contain',organizationFolderNames.nameOrganizationFolder)
    })
})
