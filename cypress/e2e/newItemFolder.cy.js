/// <reference types="cypress"/>

import createFolderName from '../fixtures/createFolderName.json'

describe.skip('newItemFolder', () => {
    it.skip('AT _05.04_003 User is able to Create Folder', () => {
        cy.get("a[href='/view/all/newJob']").should('be.visible').click();        
        cy.get("#name").type(createFolderName.folderName);
        cy.get("#j-add-item-type-nested-projects .j-item-options").contains(createFolderName.folder).click();
        cy.get("#ok-button").click();
        cy.get("button[name='Submit']").click();        
        cy.get("h1").should('include.text', createFolderName.folderName);
        cy.get('[href="/"].model-link').click();

        cy.get('.jenkins-table__link > span').should('have.text', createFolderName.folderName);
    });
});