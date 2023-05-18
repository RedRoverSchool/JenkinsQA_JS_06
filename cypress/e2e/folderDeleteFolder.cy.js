/// <reference types="cypress" />

import createFolder from '../fixtures/createFolder.json';
import messages from '../fixtures/messages.json';
import titleHomePage from '../fixtures/logInPage.json';

describe('folderDeleteFolder', () =>{
    
    beforeEach('createFolder', () => {
        cy.get('a[href="newJob"]').click();
        cy.get('input#name').type(createFolder.folderName1);
        cy.get('.label').contains('Folder').click();
        cy.get('#ok-button').should('be.visible').click();
        cy.get('button[name=Submit]').click();
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/job/${createFolder.folderName1}/`);
    }); 

    it('AT_15.04.001 | Folder | Delete folder', () =>{
        cy.get('a[href*="delete"]').click();
        cy.get('button[name = "Submit"]').click();
        cy.get('.empty-state-block').should('be.visible', titleHomePage.loginPageHeader);
        cy.get('input#search-box').type(`${createFolder.folderName1}{enter}`);
        cy.get('.error').should('have.text', messages.error);
    });
})