/// <reference types="cypress"/>

import Folder from "../pages/createOrgFolder"

describe('<Organization Folder> Delete Organization Folder', () => {
    
        it('Delete Organization Folder', () => {

            // Create new Org Folder
            const folder = new Folder();
            folder.createNewFolder();

            // Delete folder
            cy.contains('Test').click()
    
            cy.url().should('eq', `http://localhost:8080/job/${folderName}/`)
    
            cy.contains("Delete Organization Folder").click()
    
            cy.get('[class$="color"]')
            .should('be.visible')
            .click()
        })
    })