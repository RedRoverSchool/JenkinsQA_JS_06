/// <reference types = "cypress"/>

import freestyleSideMenuItems from "../fixtures/freestyleSideMenu.json"
import projects from '../fixtures/projects.json'

describe.skip('freestyle project - View project page', () => {

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

    it('AT_12.01_005 | Verify description text is saved. Scenario 1 description input field is empty', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projects.freestyle.name)
        cy.get('#j-add-item-type-standalone-projects li:first-child').click()
        cy.get('#ok-button').click()
        cy.get('#breadcrumbBar li:first-child').click()
        
        cy.get('#projectstatus tr[id^="job"]').contains(projects.freestyle.name).click()
        cy.get('#description-link').click()
        cy.get('textarea.jenkins-input').type(projects.freestyle.description)
        cy.get('div > button.jenkins-button').click()
        cy.get('#description div:first-child')
            .should('be.visible')
            .and('have.text',projects.freestyle.description)
    })

})