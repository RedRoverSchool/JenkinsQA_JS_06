/// <reference types="cypress"/>

const folderName = 'Test';

describe.skip('Organization Folder > Delete Organization Folder', () => {

    it('New Item > Create a new Organization Folder by [+New Item]', function () {

    // Create Org Folder
    cy.contains('New Item').click()

    cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/view/all/newJob`)

    cy.get("#name").type(folderName)

    cy.contains("Organization Folder").click()

    cy.get('#ok-button')
    .should('be.visible')
    .click()

    cy.url()
    .should('eq', `http://localhost:${Cypress.env('local.port')}/job/${folderName}/configure`)

    cy.contains('Save').click()

    cy.get('#main-panel > h1').should('contain', folderName)

    cy.get(':nth-child(1) > .model-link').click()

    cy.get('#job_Test .jenkins-table__link')
    .should('have.text', folderName)
    
    // Delete Org Folder
    cy.contains(folderName).click()
    
    cy.url()
    .should('eq', `http://localhost:${Cypress.env('local.port')}/job/${folderName}/`)
    
    cy.contains("Delete Organization Folder").click()
    
    cy.get('[class$="color"]')
    .should('be.visible')
    .click()

    })
    it('AT_17.03_004 | Create organization Folder>Delete Organization Folder', () => {
        cy.get('#tasks .task').contains('New Item').click()
        cy.get('input#name').type('project')
        cy.get('span.label').contains('Organization Folder').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#breadcrumbBar').contains('Dashboard').click()

        cy.url().should('eq', 'http://localhost:8080/')
        cy.get('tbody tr td .jenkins-table__link').contains('project').realHover()
        cy.get('#projectstatus button.jenkins-menu-dropdown-chevron').click()
        cy.get('.first-of-type li').contains('Delete Organization Folder').click()
        cy.get('button[name="Submit"]').click()
        cy.get('.empty-state-block').should('be.visible', 'Welcome to Jenkins!')
    })
 })