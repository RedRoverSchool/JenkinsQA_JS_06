/// <reference types="cypress"/>

describe('myViewsEditDescriptionTest', () => {
    let description = 'text'

    it ('My views Edit Description', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type(description)
        cy.get('.jenkins-button').click()
        cy.get('#description-link').should("have.attr", "href")
        cy.get('#description-link').invoke('attr', 'href').should('eq', 'editDescription')
        cy.get('.jenkins-buttons-row').should('contain', 'Edit description')
    })
})