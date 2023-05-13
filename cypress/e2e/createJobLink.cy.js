/// <reference types="cypress"/>

describe('Homepage: Create a job link', () => {

    it('Create a job link', function () {

        cy.get('a[href*="newJob"].content-block__link').should('be.visible')
        cy.get('a[href*="newJob"].content-block__link').should('have.text', 'Create a job')
        cy.get('a[href*="newJob"].content-block__link').click()
        cy.url().should('contain', '/newJob')
    });
});

describe('Create job link', () => {
    it.only('Create job link', () => {
        cy.get('#main-panel .content-block a[href=newJob]').click();
        cy.url().should('eq','http://localhost:8080/newJob');
    })
})