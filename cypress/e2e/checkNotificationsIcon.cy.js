/// <reference types="cypress" />

describe('Header | Notifications Icon', () => {
    it ('Check Notifications icon', function () {
        cy.get('#visible-am-button').click();
        cy.get('#visible-am-list a[href="/manage"]').should('have.text', 'Manage Jenkins');
    });
});