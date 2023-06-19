/// <reference types="cypress"/>

import userDescription from "../fixtures/userDescription.json";

describe.skip('editStatusDescription', () => {

    const userID = Cypress.env('local.admin.username').toLowerCase();

    it('AT_18.02.001 | Verify that the user can edit the status description', () => {
        cy.get('a[href="/user/admin"]').click();
        cy.location('pathname').should('eq', `/user/${userID}/`);
        cy.get('#description-link.jenkins-button').click();
        cy.get('textarea.jenkins-input').clear();
        cy.get('textarea.jenkins-input').type(userDescription.textHelloWorld);
        cy.get('button[name=Submit]').click();
        cy.get('#description').should('contain', userDescription.textHelloWorld);
    })

    it('AT_18.02.002 | Verify that you can save the status.', () => {
        cy.get('a[href*="/user/"]').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').clear().type(userDescription.textDataForMe);
        cy.get('.jenkins-button.jenkins-button--primary').click();
        cy.get('#description :first-child').should('include.text', userDescription.textDataForMe)
    })
})