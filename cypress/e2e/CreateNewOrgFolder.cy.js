/// <reference types="cypress"/>

const folderName = 'Test'

describe('<New Item> Create a new Organization Folder', () => {

    it('New Item > Create a new Organization Folder by [+New Item]', function () {
        cy.contains('New Item').click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/view/all/newJob`)

        cy.get("#name").type(folderName)

        cy.contains("Organization Folder").click()

        cy.get('#ok-button')
            .should('be.visible')
            .click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/job/${folderName}/configure`)

        cy.contains('Save').click()

        cy.get('#main-panel > h1').should('contain', folderName)

        cy.get(':nth-child(1) > .model-link').click()

        cy.get('#job_Test .jenkins-table__link')
            .should('have.text', folderName)
    })

    it('New Item > Create a new Organization Folder with existed name', function () {
        cy.contains('New Item').click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/view/all/newJob`)
        cy.get("#name").type(folderName)
        cy.contains("Organization Folder").click()
        cy.get('#ok-button')
            .should('be.visible')
            .click()

        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/job/${folderName}/configure`)

        cy.contains('Save').click()

        cy.get('#main-panel > h1').should('contain', folderName)

        cy.get(':nth-child(1) > .model-link').click()

        cy.get('#job_Test .jenkins-table__link')
            .should('have.text', folderName)
    })
})