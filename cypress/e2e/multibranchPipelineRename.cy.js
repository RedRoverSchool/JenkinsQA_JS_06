/// <reference types="cypress" />

import pipelineName from "../fixtures/pipelineName.json";

describe('Rename existing Multibranch Pipeline', () =>{
    beforeEach(() => {
        cy.get('a[href$="/newJob"]').click();
        cy.get('.jenkins-input').as('nameInputField');
        cy.get('@nameInputField').type(pipelineName.namePipeline);
        cy.get('[class="label"]').contains('Multibranch Pipeline').click();
        cy.get('button[type=submit]').should('be.enabled').click();
        cy.url().should('include', `/${pipelineName.namePipeline}/configure`);
        cy.get('button[name=Submit]').click();
        cy.get('[class="model-link"]').contains('Dashboard').click();
    })

    it('Rename Multibranch Pipeline using dropdown menu_positive', ()=> {
        cy.get('a[href^="job/"').realHover();
        cy.get('td > a [class$="dropdown-chevron"]').click();
        cy.get('li > a > span').contains('Rename').click();
        cy.get('@nameInputField').clear();
        cy.get('@nameInputField').type(pipelineName.newNamePipeline);
        cy.get('button[name=Submit]').click();
        cy.url().should('include', `/job/${pipelineName.newNamePipeline}`);
        cy.get('h1').contains(`${pipelineName.newNamePipeline}`);
    })

    it('Rename Multibranch Pipeline using dropdown menu_negative1', () => {
        cy.get('a[href^="job/"').realHover();
        cy.get('td > a [class$="dropdown-chevron"]').click();
        cy.get('li > a > span').contains('Rename').click();
        cy.get('button[name=Submit]').click();
        cy.url().should('include', `/job/${pipelineName.namePipeline}/confirmRename`);
        cy.get('#main-panel h1').should('have.text', messages.renameErrorMessage.error);
        cy.get('#main-panel p').should('have.text', messages.renameErrorMessage.message);
    })
})
