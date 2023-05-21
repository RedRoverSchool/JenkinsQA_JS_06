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

    it('AT_01.01_37 | Head icon is visible, clickable', ()=>{
        cy.get("a[href='/asynchPeople/']").click()
        cy.get('#jenkins-home-link').should('be.visible').click()
        cy.url().should('eq','http://localhost:8080/')
    })
  
    it('AT_01.01_033 | Validate <Header> head icon', () => {
        cy.get('span.task-link-text').contains('People').click({ force: true });
        cy.get('div h1').should('exist')
            .and('include.text', 'People');
        cy.get('#jenkins-home-link').click();
        cy.get('div h1').should('have.text', 'Welcome to Jenkins!')
            .and('be.visible');
    })

    it('AT_01.01.036 | Head Icon visible and active', () => {
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get('#jenkins-head-icon')
            .should('be.visible')
            .click()
        cy.get('h1').should('have.text', 'Welcome to Jenkins!')
    })
  
    it('AT_01.01_033 | Validate <Header> head icon', () => {
        cy.get('span.task-link-text').contains('People').click({force: true});
        cy.get('div h1').should('exist')
                        .and('include.text','People');
        cy.get('#jenkins-home-link').click();
        cy.get('div h1').should('have.text','Welcome to Jenkins!')
                        .and('be.visible');

    })
    
    it('AT_01.01_038 | Head Icon is visible and redirects to home page after clicking', () => {
        cy.get('a[href="newJob"]').click();
        cy.get('#jenkins-head-icon').should('be.visible').click();
        cy.get('div h1').should('have.text','Welcome to Jenkins!').and('be.visible');
    })

    it('AT_01.01_39 | Head icon is visible, clickable and redirects to the home page', () => {
        cy.get('span.task-link-text').contains('People').click({force:true});
        cy.get('#jenkins-name-icon').click();
        cy.get('h1').should('have.text','Welcome to Jenkins!').and('be.visible');
    })
})