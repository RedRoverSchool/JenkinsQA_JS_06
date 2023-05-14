/// <reference types='cypress' />

describe('New Item', () => {
    it('AT_05.08_004 | <New Item> After clicking on New Item link, user is taken to New Item page', () => {
        cy.get('.task:nth-child(1) .task-icon-link').should('exist') //contains New Item icon
        cy.get('.task:nth-child(1) a.task-link')
            .should('exist')
            .and('have.text', 'New Item')
            .and('have.attr', 'href', '/view/all/newJob')
            .click()
        cy.url()
            .should('contain', 'http://localhost') //skips port number
            .should('contain', '/view/all/newJob')
    });
});