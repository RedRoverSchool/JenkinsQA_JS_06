/// <reference types="cypress"/>

import userDescription from '../fixtures/userDescription.json'
import descriptionsProject from '../fixtures/descriptionsProject.json'

const USERNAME = Cypress.env('local.admin.username');

describe('People Edit Discription to User', () => {
    it("AT_06.04_004 | <People> Verify the User's Description can be edited", () => {
        cy.get('#tasks .task:nth-child(2)').click()
        cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click()
        cy.get('[href="editDescription"]').click()
        cy.get('textarea[name="description"]').type(userDescription.description)
        cy.get('[formnovalidate="formNoValidate"]').click()

        cy.get('[href="editDescription"]')
            .should('contain', descriptionsProject.editDescriptionButtonText)
            .click()
        cy.get('textarea[name="description"]').clear().type(userDescription.editDescription)
        cy.get('[formnovalidate="formNoValidate"]').click()
        cy.get('#description div:nth-child(1)').should('have.text', userDescription.editDescription)

    })
})




