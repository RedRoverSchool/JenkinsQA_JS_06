/// <reference types="cypress"/>
import projects from '../fixtures/projects.json';
const jenkinsPort = Cypress.env('local.port');
const jenkinsURL = 'http://localhost:' + jenkinsPort;
const userId = Cypress.env('local.admin.username').toLowerCase();
describe('Build History Sort builds', () => {
    it('AT_07.02 _001 | Build History Sort builds', () => {
        const sortColumn = () => cy.get('table#projectStatus thead .sortheader');
        const buildColumn = () => sortColumn().contains('Build').realHover();
        const timeColumn = () => sortColumn().contains('Time Since').realHover();
        const userMenuItems = () => cy.get('#breadcrumb-menu li.yuimenuitem a span');
        const userMenu = () => cy.get('#page-header .login a.model-link button.jenkins-menu-dropdown-chevron').realHover();
        const firstBuildInTable = () => cy.get('table#projectStatus > tbody > tr:first-child > td >a.model-link.inside');

        cy.get('.task ').contains('New Item').click();
        cy.get('input#name').type(projects.freestyle.name);
        cy.get('#items li').contains('Freestyle project').click();
        cy.get('#ok-button').click();
        cy.get('#breadcrumbBar').contains('Dashboard').click();
        for (let loop = 0; loop < 3; cy.wait(1000) && loop++) {
            cy.intercept(jenkinsURL + '/job/' + projects.freestyle.name + '/build?delay=0sec').as('schedule');
            cy.get('table#projectstatus tr#job_' + projects.freestyle.name + ' td:last-of-type')
                .click();
            cy.wait('@schedule');
        }

        userMenu().click();
        userMenuItems().contains('Builds').click();

        cy.url().should('eq', jenkinsURL + '/user/' + userId + '/builds');

        buildColumn().click();
        firstBuildInTable().invoke('text').then(text1 => {
            buildColumn().click();
            firstBuildInTable().should('not.have.text', text1);
            buildColumn().click();
            firstBuildInTable().should('have.text', text1);
            timeColumn().click();
            firstBuildInTable().invoke('text').then(text2 => {
                timeColumn().click();
                firstBuildInTable().should('not.have.text', text2);
                timeColumn().click();
                firstBuildInTable().should('have.text', text2);
            });
        });
    });
});