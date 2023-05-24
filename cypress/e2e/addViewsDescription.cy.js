/// <reference types="cypress" />
import addText from "../fixtures/addText.json"

describe('My Views | Add Description', () => {
    it('Verify Possibility to Add Description', () => {
        cy.get('[href="/me/my-views"]').click()
        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').type('123')
        cy.get('button[name="Submit"]').click()
        cy.get('#description').should('contain', '123')
    });


    it('AT_09.02.008_Add description to "My Views"', () => {
        cy.get('a[href="/me/my-views"]').click()
        cy.get('#description-link').should('be.visible').click()
        cy.get('.jenkins-input').should('be.visible').type('My text')
        cy.get('button[name=Submit]').click()
        cy.get('#description > div:nth-child(1)').should('contain', addText.addDescriptionsText)
    })
})
