/// <reference types="cypress"/>

describe('Build History|View build history calendar', () => {
    it('AT_07.01 _001| Build History|Build History link is clickable', () => {
        cy.get('span.task-link-text').contains('Build History').click({ force: true });
        cy.get('.jenkins-app-bar__content>h1').should('have.text', 'Build History of Jenkins');
    });
})
