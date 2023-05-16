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
})