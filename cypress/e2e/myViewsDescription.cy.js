/// <reference types="cypress"/>

describe('myViewsEditDescriptionTest', () => {
    const description = 'text'
    const newDescription = 'newText'

    it ('My views Edit Description', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type(description)
        cy.get('.jenkins-button').click()
        cy.get('#description-link').should("have.attr", "href")
        cy.get('#description-link').invoke('attr', 'href').should('eq', 'editDescription')
        cy.get('.jenkins-buttons-row').should('contain', 'Edit description')
    })

    it ('My views Edit Description text is saved', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').clear().type(description)
        cy.get('.jenkins-button').click()
        cy.get('#description div:nth-child(1)').should('have.text', description)
        cy.get('a[href="editDescription"]').click()
        cy.get('.jenkins-input   ').clear().type(newDescription)
        cy.get('.jenkins-button').click()
        cy.get('#description div:nth-child(1)').should('have.text', newDescription)
        cy.get('#description div:nth-child(1)').should('not.have.text', description)
    })
})