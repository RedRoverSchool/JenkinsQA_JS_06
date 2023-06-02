/// <reference types="cypress"/>

import userDescription from '../fixtures/userDescription.json'
import descriptionsProject from '../fixtures/descriptionsProject.json'
import userDescription_zb from "../fixtures/userDescription_zb.json";

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

    it('AT_06.04.003 | <People> | Edit Users description',() => {
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click()
        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').clear().type(userDescription_zb.oldDescription)
        cy.get('button[name="Submit"]').click()
        cy.get('#description div:nth-of-type(1)').should('have.text', userDescription_zb.oldDescription)
        
        cy.get('#description-link').click();
        cy.get('textarea[name="description"]').clear().type(userDescription_zb.editOldDescription)
        cy.get('button[name="Submit"]').click()
        cy.get('#description div:nth-of-type(1)').should('have.text', userDescription_zb.editOldDescription)
    })

    it('AT_06.04_005 | <People> Edit User description', () => {
        cy.get('a[href="/asynchPeople/"]').should('have.text', userDescription_zb.people).click()
        cy.get('#people tr:first-child a[href*="/user/"]').click()
        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').clear().type(userDescription_zb.oldDescription)
        cy.get('div[align="right"]>button').click()
        cy.get('#description div:nth-of-type(1)').should('have.text', userDescription_zb.oldDescription)

        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').clear().type(userDescription_zb.editOldDescription)
        cy.get('div[align="right"]>button').click()
        cy.get('#description div:nth-of-type(1)').should('have.text', userDescription_zb.editOldDescription)
    })
})




