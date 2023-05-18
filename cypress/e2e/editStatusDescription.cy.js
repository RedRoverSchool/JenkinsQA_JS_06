/// <reference types="cypress"/>

describe('editStatusDescription', () => {

    it('AT_18.02.001 | Verify that the user can edit the status description', () => {
        cy.get('a[href="/user/admin"]').click();
        cy.location('pathname').should('eq', '/user/admin/');
        cy.get('#description-link.jenkins-button').click();
        cy.get('textarea.jenkins-input').clear();
        cy.get('textarea.jenkins-input').type('Hello world!');
        cy.get('button[name=Submit]').click();
        cy.get('#description').should('contain', "Hello world!");
    })
})
