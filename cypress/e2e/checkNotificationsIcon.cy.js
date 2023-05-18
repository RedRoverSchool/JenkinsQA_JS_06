/// <reference types="cypress" />

describe('Header | Notifications Icon', () => {
    it.skip('Check Notifications icon', function () {
        cy.get('#visible-am-button').click();
        cy.get('#visible-am-list a[href="/manage"]').should('have.text', 'Manage Jenkins');
    });
});