/// <reference types = "cypress"/>

import freestyleSideMenuItems from "../fixtures/freestyleSideMenu.json"

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

    it('AT_12.01_003|Freestyle project> View project page side', () => {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type('FreestyleProject').click();
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('[name = "Submit"]').click();
        cy.get('.jenkins-breadcrumbs__list-item a[href = "/"]').click();

        cy.contains('FreestyleProject').click();
        cy.get('.task-link ').then($el => {
            let arr = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(arr).to.be.deep.equal(freestyleSideMenuItems.freestyleSideMenuItems);
        })
    })

})