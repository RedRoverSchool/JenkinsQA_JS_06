/// <reference types='cypress'/>

import userDescription from '../fixtures/userDescription.json'
import userDescription_zb from "../fixtures/userDescription_zb.json";
const USERNAME = Cypress.env('local.admin.username');

describe('People Add Discription to User', () => {

    it('AT_06.02_008 | <People> Verify the ability to add a description to a user', () => {
        cy.get('#tasks .task:nth-child(2)').click()
        cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click()
        cy.get('[href="editDescription"]').click()
        cy.get('textarea[name="description"]').clear().type(userDescription.description)
        cy.get('[formnovalidate="formNoValidate"]').click()

        cy.get('#description div:nth-child(1)').should('include.text', `${userDescription.description}`)
    })

    it('AT_06.02.006 | <People> | Verify adding description to the user',() => {
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click()
        cy.get('#description-link').click();
        cy.get('textarea[name="description"]').clear().type(userDescription_zb.addNewDescription)
        cy.get('button[name="Submit"]').click()
        cy.get('#description div:nth-of-type(1)').should('have.text', userDescription_zb.addNewDescription)
      })

})
