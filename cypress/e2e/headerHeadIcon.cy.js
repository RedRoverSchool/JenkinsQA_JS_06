/// <reference types="cypress"/>

describe('Header Head Icon', () => {

    it('Verify that Head Icon is visible and clickable', () => {
        cy.get('#jenkins-home-link').should('be.visible').click()
        cy.url().should('include', 'http://localhost:8080/')
    })

    it('AT_01.01_012 | Jenkins Header logo is visible and clickable', () => {
        cy.get('a[href="newJob"]').find('span').contains('Create a job').click()
        cy.get('#jenkins-name-icon').click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/`)
    })

    it('AT_01.01_033 | Validate <Header> head icon', () => {
        cy.get('span.task-link-text').contains('People').click({force: true});
        cy.get('div h1').should('exist')
                        .and('include.text','People');
        cy.get('#jenkins-home-link').click();
        cy.get('div h1').should('have.text','Welcome to Jenkins!')
                        .and('be.visible');

    })
})