/// <reference types="cypress"/>

import userDescription from '../fixtures/userDescription.json'

describe('People Add Discription to User', () => {
  
  it('AT_06.02_008 | <People> Verify the ability to add a description to a user', () => {
    cy.get('#tasks .task:nth-child(2)').click()
    cy.get('a[href^="/user/"][class="model-link"]').click()
    cy.get('[href="editDescription"]').click()
    cy.get('textarea[name="description"]').clear().type(userDescription.description)
    cy.get('[formnovalidate="formNoValidate"]').click()

    cy.get('#description div:nth-child(1)').should('include.text', `${userDescription.description}`)
  })
  
})


