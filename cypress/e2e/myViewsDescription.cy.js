/// <reference types="cypress"/>
import myViewsData from "../fixtures/myViews.json"

describe('myViewsEditDescriptionTest', () => {
    const description = 'text'
    const newDescription = 'newText'

    it ('AT_09.03.001 | <My Views>Edit description link is visible and clickable', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type(description)
        cy.get('.jenkins-button').click()
        cy.get('#description-link').should("have.attr", "href")
        cy.get('#description-link').invoke('attr', 'href').should('eq', 'editDescription')
        cy.get('.jenkins-buttons-row').should('contain', 'Edit description')
    })

    it ('AT_09.03.002 | <My Views>Edit description text is saved', () => {
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




    it('AT_09.03_004 | My Views Verify Edit description is changed and saved', () => {
      cy.contains('My Views').click()
      cy.get('#description-link').click()
      cy.get('#description textarea').clear().type(description)
      cy.get('button[name="Submit"]').click()
      cy.get('#description div:nth-child(1)').should('have.text', description)

      cy.get('#description-link')
        .should('exist')
        .and('contain', 'Edit description')
      cy.get('#description-link').click()
      cy.get('#description textarea').clear().type(newDescription)
      cy.get('button[name="Submit"]').click()
      cy.get('#description div:nth-child(1)').should('have.text', newDescription)
    })

    it('AT_09.03_06 | <My Views> Verify description is changed', () => {
      cy.get('a[href="/me/my-views"]').click()
      cy.get('#description-link').click()
      cy.get('textarea[name="description"]').click().clear().type(myViewsData.editedDescription);
      cy.get('button[name="Submit"]').click()

      cy.get('#description').should('contain.text', myViewsData.editedDescription)
    });
})