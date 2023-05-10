/// <reference types="cypress"/>

describe('verify user can rename fristyle project with dropdown', () => {
    
    let jobName = 'Project1'
    
    beforeEach ('Create freestyle project', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(jobName)
        cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
    });
    
    it ('AT_12.03_001 | Verify renaming freestyle project using dropdown menu' , function () {
        cy.get('tbody tr td a.jenkins-table__link').should('be.visible').should('have.text', jobName).realHover()
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.contains('div#breadcrumb-menu ul li a', 'Rename').should('be.visible').click();

        cy.get('input[name="newName"]').click()
        cy.get('div.setting-main > input').clear()
        cy.get('div.setting-main > input').type('Project1 Edited')
        cy.get('button[name="Submit"]').click()

        cy.get('#main-panel > h1').should('be.visible').should('have.text', 'Project Project1 Edited')

        cy.get('.icon-edit-delete').click()
    })
})