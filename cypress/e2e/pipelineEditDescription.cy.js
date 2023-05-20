/// <reference types='cypress'/>
import pipelineName from '../fixtures/pipelineName.json'

describe('Add description to the pipeline', () =>{

    beforeEach ('Create pipeline', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('TestPipeline')
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
    });

    it('Verify User is able to go to tab “Edit description”', () => {
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type(pipelineName.descriptionPipeLine)
        cy.get('.jenkins-button--primary ').click();
        cy.get('#description-link').should('contain','Edit description').click()
        cy.get('textarea[name="description"]').should('have.value', pipelineName.descriptionPipeLine);
    });
})