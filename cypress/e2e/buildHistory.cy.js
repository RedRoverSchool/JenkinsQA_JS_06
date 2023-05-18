/// <reference types="cypress"/>

describe('Build History|View build history calendar', () => {
    it('AT_07.01 _001| Build History|Build History link is clickable', () => {
        cy.get('span.task-link-text').contains('Build History').click({ force: true });
        cy.get('.jenkins-app-bar__content>h1').should('have.text', 'Build History of Jenkins');
    });

    it('AT_07.01_002| Build History Verify Build History link is clickable', () =>{
        cy.get('a[href="/view/all/builds"').click()
        cy.get('.jenkins-app-bar__content').should('have.text', 'Build History of Jenkins')
    })
})
