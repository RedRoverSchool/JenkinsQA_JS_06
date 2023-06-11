/// <reference types="cypress"/>
import descriptionsProject from '../fixtures/descriptionsProject.json'
import createNewView from '../fixtures/createNewView.json'

describe.skip('My Views add description', () => {

    it.skip('AT_9.02_001|My Views Add description', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input ').clear().type('DESCRIPTION')
        cy.get('.jenkins-button').click()
        cy.get('#description div:nth-child(1)').should('have.text','DESCRIPTION')
    })

    it.skip('AT 09.02.005| My Views> Add description', function () {
        cy.contains(createNewView.myView).click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input')
            .should('be.visible')
            .clear()
            .type(descriptionsProject.addDescriptionProject);
        cy.get('button[name="Submit"]').click();
        cy.get('#description>div:nth-child(1)')
            .should('have.text', descriptionsProject.addDescriptionProject);
    });

})
