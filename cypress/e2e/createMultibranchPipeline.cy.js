///<reference types="cypress" />

import multibranchPipeline from '../fixtures/multibranchPipeline.json'
import pipelineName from '../fixtures/pipelineName.json'
import createFolderProject from '../fixtures/createFolderProject.json'

describe('New Item Create a new Multibranch Pipeline', () => {

    it.skip('AT_05.05_004 Create a new Multibranch Pipeline using [+New Item]', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(pipelineName.namePipeline)
        cy.get('#j-add-item-type-nested-projects').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#main-panel').should('contain', pipelineName.namePipeline)
        cy.get('#breadcrumbBar li:nth-child(1)').click()
        cy.get('#projectstatus')
            .should('exist')
            .and('include.text', pipelineName.namePipeline)
    })

    it.skip('AT_05.05_006 | New Item | Create a new Multibranch Pipeline', ()=>{
        cy.get(':nth-child(1) > .task-link-wrapper > .task-link').click()
        cy.url().should('includes','/view/all/newJob')
        cy.get('#name').type(multibranchPipeline.newMultiPipeline)
        cy.contains(multibranchPipeline.multiPipeLink).click()
        cy.get('#ok-button').click()
        cy.url().should('includes','/configure')
        cy.get('button[name="Submit"]').click()
        cy.contains(multibranchPipeline.newMultiPipeline).should('be.visible')
        cy.get('.model-link').eq(1).contains(multibranchPipeline.dashboardLink).click()
        cy.get('table#projectstatus.jenkins-table.sortable').contains(multibranchPipeline.newMultiPipeline)
    })

    it('AT_05.05_011 | <Name> Create a new Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]')
            .should('be.visible')
            .click();
        cy.get('input.jenkins-input')
            .should('be.visible')
            .type(pipelineName.namePipeline);
        cy.contains('span', multibranchPipeline.multiPipeLink)
            .should('be.visible')
            .click();
        cy.get('li[class*="MultiBranch"]')
            .should('have.attr', 'aria-checked')
            .and('equal', 'true');
        cy.get('button#ok-button')
            .should('be.visible')
            .should('not.contain', 'disabled')
            .click();
        cy.get('button[name="Submit"]').click();
        cy.get('a[href="/"].model-link').should('have.text', 'Dashboard'); 
        cy.get(`a[href="/job/${pipelineName.namePipeline}/"].model-link`)
            .should('have.text', pipelineName.namePipeline);
    })

})