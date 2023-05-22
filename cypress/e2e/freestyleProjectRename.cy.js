/// <reference types="cypress"/>

import messages from "../fixtures/messages.json"
import freestyleProject from "../fixtures/freestyleProject.json"
import userData from "../fixtures/renameProjectValid.json"

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

    it('AT_12.03.006 | Freestyle project Rename project without any changes', () => {
        cy.get('.jenkins-table__link').realHover()
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').click()
        cy.get('a[href*="/confirm-rename"]').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#main-panel h1')
            .should('be.visible')
            .and('have.text', messages.renameErrorMessage.error)
        cy.get('#main-panel p')
            .should('be.visible')
            .and('have.text', messages.renameErrorMessage.message)
    });

})

describe('FreestyleProjectRenameFreestyleProject', () => {

    beforeEach('Prepare freeStyle Project', function () {
      cy.get(".task-link").eq(0).click();
      cy.get("#name").type(userData.projectName);
      cy.get('.hudson_model_FreeStyleProject').click();
      cy.get('#ok-button').should('have.text', userData.ok).click();
      cy.get('.setting-main  textarea  ').eq(0).type(userData.text);
      cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary')
        .click();

      cy.get('.jenkins-breadcrumbs__list-item > .model-link').eq(0).click();

      cy.get('td> a > span').should('have.text', userData.projectName).realHover();
      cy.get('td> a > button').should('be.visible').click();
      cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span')
        .should('be.visible')
        .and('have.length', 6)
        .eq(5)
        .click();
    });
    it("AT_12.03.004 Rename project, new name is valid", () => {
      cy.get('input[name="newName"]').clear().type(userData.newProjectName);
      cy.get('button[name="Submit"]').click();

      cy.get('h1.job-index-headline.page-headline').should('have.text', `Project ${userData.newProjectName}`);
    });

    it("AT_12.03.005 Rename project, new name isn't valid", () => {
      cy.get('button[name="Submit"]').click();

      cy.get('div h1').contains(userData.error);
      cy.get('div#main-panel p').should('have.text', userData.errorDescription);

    });

  });

