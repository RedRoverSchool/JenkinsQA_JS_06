/// <reference types="cypress"/>

import createFolder from "../fixtures/createFolder.json"



describe('Folder rename folder', () => {
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

    it('AT_15.06_001 | Folder>Rename Folder', () => {
        cy.get('#side-panel>#tasks>div.task a[href="/job/' + createFolder.folderName + '/confirm-rename"]').click();
        cy.url().should('eq', jenkinsURL + '/job/' + createFolder.folderName + '/confirm-rename');
        cy.get('form[name="config"] input[name="newName"').type('{selectAll}').type(createFolder.folderName + 'CHANGED');
        cy.get('button[name="Submit"]').click();
        cy.url().should('eq', jenkinsURL + '/job/' + createFolder.folderName + 'CHANGED/');
        cy.get('#main-panel > h1').should('contain', createFolder.folderName + 'CHANGED');
    });
});