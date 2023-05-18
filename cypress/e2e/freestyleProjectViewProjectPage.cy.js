/// <reference types = "cypress"/>

describe('freestyle project - View project page', () => {

    it('AT_12.01_001|Freestyle project> View project page', () => {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type('FreestyleProject').click();
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('[name = "Submit"]').click();
        cy.get('.jenkins-breadcrumbs__list-item a[href = "/"]').click();

        cy.contains('FreestyleProject').click();
        cy.get('.job-index-headline').should('include.text', 'Project FreestyleProject');
        cy.get('a[href = "editDescription"]').should('include.text', 'Add description');
        cy.get('button[formnovalidate = "formNoValidate"]').should('include.text', 'Disable Project');
    })

})