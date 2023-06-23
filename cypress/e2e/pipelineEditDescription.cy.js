/// <reference types='cypress'/>

import pipelineName from '../fixtures/pipelineName.json'
import DescriptionEdited from '../fixtures/pipelineName.json'

describe.skip('Add description to the pipeline', () => {

    beforeEach('Create pipeline', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('TestPipeline')
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('textarea[name="description"]').click().type(pipelineName.firstDescription)
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-name-icon').click()
    });

    it('Verify User is able to go to tab “Edit description” and edit description', () => {
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').clear().type(pipelineName.descriptionPipeLine)
        cy.get('.jenkins-button--primary ').click();
        cy.get('#description-link').should('contain', 'Edit description').click()
        cy.get('textarea[name="description"]').should('have.value', pipelineName.descriptionPipeLine);
    });

    it.skip('AT_13.05_001 | Pipeline | Edit existing description of the pipeline by adding new text to the end', () => {
        cy.get('a[href="job/TestPipeline/"] span').click()
        cy.get('#description-link').click()
        cy.get('textarea.jenkins-input')
          .should('have.text', pipelineName.firstDescription)
        cy.get('button[name="Submit"]').first().click()
        cy.get(':nth-child(1) > .model-link').click()
        cy.get(':nth-child(5) .task-link-wrapper .task-link').click()
        cy.get('a[href="job/TestPipeline/"]').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type('{moveToEnd}').type(pipelineName.additionalDescriptionPipeline)
        cy.get('button[name="Submit"]').first().click()
        cy.get('#description div:nth-child(1)')
          .should('have.text', pipelineName.firstDescription + pipelineName.additionalDescriptionPipeline)
    });
    
it('AT_13.05_002 | Edit description to the pipeline', () =>{
    cy.get('.jenkins-table__link > span').click();
    cy.get('#description-link').click();
    cy.get('.jenkins-input   ').clear().type(DescriptionEdited.editPipelineDescription);
    cy.get('.jenkins-button--primary ').click();
    cy.get('#description > :nth-child(1)').should('not.have.text',pipelineName.firstDescription );
    cy.get('#description > :nth-child(1)').should('have.text',DescriptionEdited.editPipelineDescription );
    })
})
