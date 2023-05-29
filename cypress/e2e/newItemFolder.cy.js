/// <reference types="cypress"/>

import createFolderName from '../fixtures/createFolderName.json'

describe('newItemFolder', () => {
    it('TC _05.04_003 Create Folder through "Create a job" link', () => {
        cy.get("a[href='newJob']").click();
        cy.get("#name").type(createFolderName.folderName);
        cy.get("#j-add-item-type-nested-projects .j-item-options").contains("Folder").click();
        cy.get("#ok-button").click();
        cy.get("button[name='Submit']").click();        
        cy.get("h1").should('include.text', createFolderName.folderName);
        cy.get('[href="/"].model-link').click();

        cy.get('.jenkins-table__link > span').should('have.text', createFolderName.folderName);
    })
})