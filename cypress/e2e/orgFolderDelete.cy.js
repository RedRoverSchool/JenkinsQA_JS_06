/// <reference types="cypress"/>
import projects from '../fixtures/projects.json'
import messages from '../fixtures/messages.json'

describe('<Organization Folder> Delete Organization Folder', () => {

    it('Delete organization folder within the selected organization folder', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('span.label').contains('Organization Folder').click()
        cy.get('input#name').type('OlgaJS')
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()

        cy.get('tbody tr td a.jenkins-table__link').realHover()
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('div#breadcrumb-menu ul li a').contains('Delete Organization Folder').click();
        cy.get('button[name="Submit"]').click()
    });

    it('Delete Organization Folder using dropdown menu', () => {
        cy.get('#tasks .task').contains('New Item').click()
        cy.get('input#name').type('orgfolder')
        cy.get('#j-add-item-type-nested-projects li:last-child').click()
        cy.get('#ok-button').click()
        cy.get('#breadcrumbBar').contains('Dashboard').click()
    
        cy.get('tbody tr td .jenkins-table__link').contains('orgfolder').realHover()
        cy.get('#projectstatus button.jenkins-menu-dropdown-chevron').click()
        cy.get('.first-of-type li').contains('Delete Organization Folder').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#breadcrumbBar').contains('Dashboard').click()
        cy.get('#search-box').type(`${projects.organizationFolder.name}{enter}`)
        cy.get('.error').should('have.text', messages.error)
    })
});