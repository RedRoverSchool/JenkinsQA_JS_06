/// <reference types="cypress"/>

import userDescription from '../fixtures/userDescription.json'

describe('editStatusDescription', () => {
    it('AT_18.02.002 | Verify that you can save the status.', () => {
        cy.get('a[href*="/user/"]').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').clear().type(userDescription.textDataForMe);
        cy.get('.jenkins-button.jenkins-button--primary').click();
        cy.get('#description :first-child').should('include.text', userDescription.textDataForMe)
    })
})

