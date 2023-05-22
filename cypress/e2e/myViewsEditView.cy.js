/// <reference types="cypress"/>
import data from '../fixtures/createNewView.json';

describe('My Views Edit View', () => {
    it('AT_09.07.001 | My views | Verify that "Edit View" tab is displayed', () => {
        cy.get('a[href$="/newJob"]').click();
        cy.get('input.jenkins-input').type(data.newItem);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('.jenkins-button').click();
        cy.get('.jenkins-button.jenkins-button--primary ').click();
        cy.get('h1').should('includes.text', data.newItem);
        cy.get('.jenkins-breadcrumbs__list-item a[href="/"]').click();

        cy.get('.addTab').realHover().should('have.attr', 'aria-label', data.newView).click();
        cy.get('input#name').type(data.myView);
        cy.get('input[type="radio"][value="hudson.model.MyView"]').focus().click({ force: true });
        cy.get('button[name="Submit"]').click();
        cy.get('.task-link-text').should('include.text', data.editView);
    });

    it('AT_09.07.003 | Verify user can click "Edit View" button', () => {
        cy.get('a[href$="/newJob"]').click();
        cy.get('input.jenkins-input').type(data.newItem);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
        
        cy.get('a[href="/"].model-link').click();
        cy.get('a[href="/newView"]').click();
        cy.get('#name').type(data.viewName);
        cy.get('label[for="hudson.model.MyView"]').click();
        cy.get('#ok').click();

        cy.get('a[href$="/configure"]').click();
        cy.get('[name="name"].jenkins-input').should('have.attr', 'value', data.viewName);

    })
})