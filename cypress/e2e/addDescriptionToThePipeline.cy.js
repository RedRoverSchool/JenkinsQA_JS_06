/// <reference types="cypress"/>

import pipelineName from '../fixtures/pipelineName.json'
import description from '../fixtures/userDescription.json'

describe('addDescriptionToThePipeline', () =>{
    beforeEach(() => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.label').contains('Pipeline').click();
        cy.get('#name').type(pipelineName.namePipeline);
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();
        cy.get('.jenkins-breadcrumbs__list-item').click();
        cy.get('.jenkins-table__link > span').should('include.text', `${pipelineName.namePipeline}`).should('exist');
    })
    it('addDescriptionToThePipeline', () =>{
        cy.get('.jenkins-table__link > span').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').type(description.textDescription);
        cy.get('.jenkins-button--primary').click();
        cy.get('#description').should('contain',`${description.textDescription}`).should('exist');
    })
})




