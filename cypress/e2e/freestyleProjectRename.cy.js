/// <reference types="cypress"/>

import messages from "../fixtures/messages.json"
import freestyleProject from "../fixtures/freestyleProject.json"

describe('Freestyle project - Rename project', () => {

    let jobName = 'Project1'

    beforeEach('Create freestyle project', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(jobName)
        cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
    });

    it('AT_12.03_001 | Verify renaming freestyle project using dropdown menu', function () {
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

    it('AT_12.03_002 | Verify that using the same name an error message is appeared', function () {
        cy.get('.jenkins-table__link').click()
        cy.get('a[href$="confirm-rename"]').click()
        cy.get('.jenkins-input').should('have.value', jobName)
        cy.get('.jenkins-button').click()

        cy.get('#main-panel h1').should('have.text', messages.renameErrorMessage.error).and('be.visible')
        cy.get('#main-panel p').should('have.text', messages.renameErrorMessage.message).and('be.visible')
    });

    it('AT_12.03.003| <Freestyle project> Rename project from Freestyle project page,and verify it is accessible and visible on the Jenkins dashboard under the new name.', function () {
        cy.get('#job_Project1 td:nth-child(3) a span')
          .should('be.visible')
          .and('have.text', freestyleProject.projectName).click()
        cy.get('#main-panel h1').should('be.visible').contains(freestyleProject.projectName)
        cy.get('a[href="/job/Project1/confirm-rename"]').click()
        cy.get('.setting-main').click()
        cy.get('div.setting-main input').clear().type(freestyleProject.projectNewName)
        cy.get('#bottom-sticker div button').click()
        cy.get('#breadcrumbs li a[href="/"]').click()

        cy.get('tr td:nth-child(3) a span')
          .should('be.visible')
          .and('have.text', freestyleProject.projectNewName)
    });
})