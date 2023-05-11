/// <reference types="cypress"/>

describe('Folder add description', () => {
    it('TC 15.02_003 Add description', () => {
        cy.get('.task-link').eq(1).click();
        cy.get('.jenkins-table__link').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').clear().type('Hello world!');
        cy.get('.jenkins-button').click();
        cy.get('#description > :nth-child(1)').should('contain', 'Hello world!');
    })
})