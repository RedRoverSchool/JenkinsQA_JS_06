/// <reference types="cypress"/>

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

    it('AT_17.03_004 Delete Organization Folder', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input[name="name"]').type('project')
        cy.get('span.label').contains('Organization Folder').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get(':nth-child(1) > .model-link').click()
        cy.get('[alt="Organization Folder"]').should('be.visible')

        cy.get('tbody tr td a.jenkins-table__link').realHover()
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('div#breadcrumb-menu ul li a').contains('Delete Organization Folder').click();
        cy.get('button[name="Submit"]').click()
    })
});