/// <reference types="cypress"/>

import {textHelloWorld} from "../fixtures/userDescription.json";

describe('editStatusDescription', () => {

    const userID = Cypress.env('local.admin.username').toLowerCase();

    it('AT_18.02.001 | Verify that the user can edit the status description', () => {
        cy.get('a[href="/user/admin"]').click();
        cy.location('pathname').should('eq', `/user/${userID}/`);
        cy.get('#description-link.jenkins-button').click();
        cy.get('textarea.jenkins-input').clear();
        cy.get('textarea.jenkins-input').type(textHelloWorld);
        cy.get('button[name=Submit]').click();
        cy.get('#description').should('contain', textHelloWorld);
    })
})
