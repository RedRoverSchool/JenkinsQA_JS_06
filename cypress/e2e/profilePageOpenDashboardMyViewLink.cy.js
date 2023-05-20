/// <reference types="cypress"/>
import projects from '../fixtures/projects.json';

const jenkinsPort = Cypress.env('local.port');
const jenkinsURL = 'http://localhost:' + jenkinsPort;
const userId = Cypress.env('local.admin.username').toLowerCase();

describe('Profile Page Open dashboard My view link', () => {
    it('AT_18.05_001 | Profile Page Open dashboard with My view link', () => {

        cy.get('.task ').contains('New Item').click();
        cy.get('input#name').type(projects.freestyle.name);
        cy.get('#items li').contains('Freestyle project').click();
        cy.get('#ok-button').click();
        cy.get('#breadcrumbBar').contains('Dashboard').click();
        cy.url().should('eq', jenkinsURL+'/');

        cy.get('#side-panel div.task a[href="/me/my-views"]').click();
        cy.url().should('eq', jenkinsURL+'/me/my-views/view/all/');

        cy.get('table#projectstatus tr#job_'+projects.freestyle.name).should('be.visible');
               
    });
});