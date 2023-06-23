/// <reference types="cypress"/>

import createFolder from "../fixtures/createFolder.json"
import messages from "../fixtures/messages.json"


describe.skip('Folder rename folder', () => {
    const jenkinsURL = 'http://localhost:' + Cypress.env('local.port');

    beforeEach('createFolder', () => {
        cy.get('a[href="newJob"]').click();
        cy.get('input#name').type(createFolder.folderName);
        cy.get('li[tabindex="0"] span').contains('Folder').click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
        cy.get('#main-panel > h1').then(($h1) => {
            const text = $h1.text().trim();
            expect(text).to.equal(createFolder.folderName);
        });
    });
    it.skip('AT_15.06_001 | Folder>Rename Folder', () => {
        cy.get('#side-panel>#tasks>div.task a[href="/job/' + createFolder.folderName + '/confirm-rename"]').click();
        cy.url().should('eq', jenkinsURL + '/job/' + createFolder.folderName + '/confirm-rename');
        cy.get('form[name="config"] input[name="newName"').type('{selectAll}').type(createFolder.folderName + 'CHANGED');
        cy.get('button[name="Submit"]').click();
        cy.url().should('eq', jenkinsURL + '/job/' + createFolder.folderName + 'CHANGED/');
        cy.get('#main-panel > h1').should('contain', createFolder.folderName + 'CHANGED');
    });

    it('AT_15.06_002 | Folder> Same name Error message if renaming Folder by dropdown menu' , () => {
        cy.get('#breadcrumbs > li:nth-child(1) > a').click();
        cy.get('tbody tr td a.jenkins-table__link')
            .should('be.visible')
            .and('have.text', createFolder.folderName)
            .realHover()
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.contains('div#breadcrumb-menu ul li a', 'Rename').should('be.visible').click();

        cy.get('input[name="newName"]').click();
        cy.get('div.setting-main > input').clear()
        cy.get('div.setting-main > input').type(createFolder.folderName)
        cy.get('button[name="Submit"]').click()

        cy.get('#main-panel h1').should('have.text', messages.renameErrorMessage.error).and('be.visible')
        cy.get('#main-panel p').should('have.text', messages.renameErrorMessage.message).and('be.visible')
    });

    it.skip('AT_15.06_03 | Folder>Rename Folder', () => {
        cy.get('#side-panel #tasks .task:nth-child(7)').contains('Rename').click()
        cy.url().should('eq', jenkinsURL + '/job/' + createFolder.folderName + '/confirm-rename');
        cy.get('.setting-main [name="newName"]').clear().type(createFolder.folderName1)
        cy.get('button[name="Submit"]').click()
        cy.url().should('eq', jenkinsURL + '/job/' + createFolder.folderName1 + '/');
        cy.get('#main-panel h1').should('contain', createFolder.folderName1)
    })
});
