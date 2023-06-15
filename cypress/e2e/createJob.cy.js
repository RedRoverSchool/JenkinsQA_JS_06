/// <reference types="cypress"/>

import {header, newPageUrl, text, folder, folderName} from '../fixtures/createFolderProject.json'

describe('AT_02.01_002 | Homepage Create a clickable job link', () => {
    it('Create a clickable job link', function () {
        cy.get('li .content-block__link').contains('Create a job').should('be.visible')
        cy.get('li .content-block__link').contains('Create a job').click()
        cy.get('.add-item-name #name').type('Project2')
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('#general').should('be.visible')
    });
    it.skip ('AT_05.04.03 | <New item> User is able to create Folder project', () => {
        cy.get("a[href='/view/all/newJob']").should('have.text', header).click()
        cy.url().should("eq", newPageUrl)
        cy.get('#name').type(text).should('be.visible')
        cy.get('.label').contains(folder).click();
        cy.get('#ok-button').click()
        cy.get('#general').should('be.visible')
        cy.get("button[name='Submit']").click()
        cy.get("div[id='main-panel'] h1").should('have.text', folderName)          
    })
});