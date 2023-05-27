/// <reference types="cypress"/>

describe('AT_02.01_002 | Homepage Create a clickable job link', () => {
    it('Create a clickable job link', function () {
        cy.get('li .content-block__link').contains('Create a job').should('be.visible')
        cy.get('li .content-block__link').contains('Create a job').click()
        cy.get('.add-item-name #name').type('Project2')
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('#general').should('be.visible')
    });
    it ('AT_05.04.03 | <New item> User is able to create Folder project', () => {
        cy.get("a[href='/view/all/newJob']").should('have.text', 'New Item').click()
        cy.url().should("eq", 'http://localhost:8080/view/all/newJob')
        cy.get('#name').type('olgalex').should('be.visible')
        cy.get('.label').contains('Folder').click();
        cy.get('#ok-button').click()
        cy.get('#general').should('be.visible')
        cy.get("button[name='Submit']").click()
        cy.get("div[id='main-panel'] h1").should('have.text', '\n    olgalex\n  ')          
    })
});