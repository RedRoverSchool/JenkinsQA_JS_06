/// <reference types="cypress"/>

import pipelineName from '../fixtures/pipelineName.json'


describe('Create a new Pipeline',()=>{
    const nameOfPipeline = 'New Pipeline'
    const dashboardButton='.jenkins-breadcrumbs__list-item [href="/"]'
    const radioButtonPipeline='.org_jenkinsci_plugins_workflow_job_WorkflowJob'
    it('Create a new Pipeline',()=>{
        cy.get('span[class="task-link-text"]').contains('New Item').click({force: true})
        cy.get('[name="name"]').type(nameOfPipeline)
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click();
        cy.get('.jenkins-breadcrumbs__list-item').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(nameOfPipeline).should('exist').click()
        cy.get('[class="job-index-headline page-headline"]').should('have.text',`Pipeline ${nameOfPipeline}`)
    })

    it('AT_05.02.007 | Create a new Pipeline',() =>{
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.label').contains(pipelineName.pipelineJob).click();
        cy.get('#name').type(pipelineName.namePipeline);
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();
        cy.get('.jenkins-breadcrumbs__list-item').click();
        cy.get('.jenkins-table__link > span').should('include.text', `${pipelineName.namePipeline}`).and('exist');
    })
    it.only('AT 05.02.09|New item Create a new Pipeline',()=>{
        cy.get('[href="/view/all/newJob"]').click();
        cy.get('#name').should('be.visible').type(pipelineName.namePipeline);
        cy.get(radioButtonPipeline).click();
        cy.get('#ok-button').click();
        cy.get(dashboardButton).click();
        cy.get('#main-panel').should('contain.text',pipelineName.namePipeline)
    })
})
