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
});
