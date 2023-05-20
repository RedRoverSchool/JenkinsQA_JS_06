/// <reference types="cypress"/>

describe('My Views add description', () => {

    it('AT_9.02_001|My Views Add description', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input ').clear().type('DESCRIPTION')
        cy.get('.jenkins-button').click()
        cy.get('#description div:nth-child(1)').should('have.text','DESCRIPTION')
    })

    let inputText = 'description';
    it('AT 09.02.005| My Views> Add description', function () {
        cy.contains('My Views').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').should('be.visible').clear().type(inputText);
        cy.get('button[name="Submit"]').click();
        cy.get('#description>div:nth-child(1)').should('have.text', inputText);
    });

})
