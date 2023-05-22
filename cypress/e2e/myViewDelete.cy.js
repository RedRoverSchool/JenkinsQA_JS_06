/// <reference types="cypress"/>

import myView from "../fixtures/myView.json"

describe('My View Delete', () => {

    beforeEach('Create job and create view', () => {
        cy.get('a[href=newJob]').click()
        cy.get('input#name').type(myView.JobName1)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('[name=Submit]').click()
        cy.get('#jenkins-name-icon').click()
       
        cy.get('[href="/newView"]'). click()
        cy.get('input#name').type(myView.ViewName1)
        cy.get('[for$="MyView"]').click()
        cy.get('#ok').click()
    });

    it('AT_09.06.002 | Verify Possibility to Delete View', () => {
        cy.get('.tabBar').contains(myView.ViewName1).click()
        cy.get('[href=delete]').click()
        cy.get('[name=Submit]').click()
        cy.get('.tabBar').should('not.contain', myView.ViewName1)
    });
});
