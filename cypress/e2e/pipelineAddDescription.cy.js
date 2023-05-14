/// <reference types="cypress"/>

describe('Add a description to the Pipeline', () => {
    const newPipelineDescription = 'myFirstDescription_1'
    it('Create a  description', () => {
        cy.get('.task:first-child').click()
        cy.get('input#name').type(newPipelineDescription)
        cy.get('#j-add-item-type-standalone-projects li:nth-child(2)').click()
        cy.get('#ok-button').click()
        cy.get('textarea[name="description"]').type(newPipelineDescription)
        cy.get('button[name="Submit"]').click()
        
        cy.get('#description div:nth-child(1)')
            .should('exist')
            .and('include.text', newPipelineDescription)
    })

/// <reference types='cypress'/>
describe('Add description to the pipeline', () =>{

    beforeEach ('Create pipeline', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('TestPipeline')
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
    });

    it('verify the description can be added',()=>{
        cy.get('a[href="job/TestPipeline/"] span').click()
        cy.get('#description-link').click()
        cy.get('textarea.jenkins-input')
            .should('have.text', '')
            .type('This is test description')
        cy.get('button[name="Submit"]').first().click()

    })
})