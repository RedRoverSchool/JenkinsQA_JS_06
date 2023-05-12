/// <reference types="cypress"/>

import Folder from "../pages/createOrgFolder"

const folderName = 'Test';

describe('<Organization Folder> Delete Organization Folder', () => {
    
        it('Delete Organization Folder', () => {

            // Create new Org Folder
            const folder = new Folder();
            folder.createNewFolder();

            // Delete folderß
            cy.contains(folderName).click()
    
            // cy.url().should('eq', `http://localhost:8080/job/${folderName}/`)
            cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/job/${folderName}/`)
    
            cy.contains("Delete Organization Folder").click()
    
            cy.get('[class$="color"]')
            .should('be.visible')
            .click()
        })
    })