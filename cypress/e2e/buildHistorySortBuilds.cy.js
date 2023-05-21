/// <reference types="cypress"/>
import projects from '../fixtures/projects.json';
import buildHistory from '../fixtures/buildHistory.json';

const jenkinsPort = Cypress.env('local.port');
const jenkinsURL = 'http://localhost:' + jenkinsPort;
const userId = Cypress.env('local.admin.username').toLowerCase();

function createBuildsOfNewProject(projectName, buildsNumber) {
    cy.get('[href="/view/all/newJob"]').click();
    cy.get('.jenkins-input').type(projectName);
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();
    cy.get('.jenkins-breadcrumbs__list-item:first-child').click();

    for(let i = 1; i <= buildsNumber; i++){
        cy.get(`[tooltip="Schedule a Build for ${projectName}"]`).click();
        cy.wait(1000);
    };
}

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

    it('AT_07.02_002 | Build History > Verify user can sort builds by build number', () => {
        const buildsNumber = 3;
        createBuildsOfNewProject(projects.newProject, buildsNumber)

        cy.get('[href="/view/all/builds"]').click();
        cy.get('div h1').should('have.text', buildHistory.title)
        
        cy.get('#projectStatus tbody tr td:nth-child(2) .inside').then(($buildNumber) => {
            let arrayDESC = $buildNumber.text().match(/\d/g).join(' ').split(' ').map($el => Number($el));
            for (let i = 0; i < arrayDESC.length -1 ; i++) {
                expect(arrayDESC[i]).to.equal(arrayDESC[i+1] + 1)
            }
            expect(arrayDESC[2]).to.equal(1);
        });

        cy.get('.sortheader').contains('Build').click().click();
        cy.get('#projectStatus tbody tr td:nth-child(2) .inside').then(($buildNumber) => {
            let arrayASC = $buildNumber.text().match(/\d/g).join(' ').split(' ').map($el => Number($el));
            for (let i = 0; i < arrayASC.length-1; i++) {
                expect(arrayASC[i]).to.equal(arrayASC[i+1] - 1);
            }
            expect(arrayASC[2]).to.equal(buildsNumber);
        });
    });
});