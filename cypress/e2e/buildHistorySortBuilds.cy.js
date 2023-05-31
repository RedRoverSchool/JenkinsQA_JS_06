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
};

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

    it('AT_07.02_002 | Build History > Verify by default builds are sorted by build number in descending order', () => {
        const buildsNumber = 3;
        let buidsNumberArrayDESC = buildHistory.buidsNumberArrayDESC;
         
        createBuildsOfNewProject(projects.newProject, buildsNumber);

        cy.get('[href="/view/all/builds"]').click();
        cy.get('div h1').should('have.text', buildHistory.title);
        
        cy.get('#projectStatus tbody tr td:nth-child(2) .inside').then(($buildNumber) => {
            let arrayActual = $buildNumber.text().match(/\d/g).join(' ').split(' ').map($el => Number($el));
 
            expect(arrayActual).to.deep.equal(buidsNumberArrayDESC);
        });
    });

    it('AT_07.02_003 | Build History > Verify user can sort builds by build number in ascending order', () => {
        const buildsNumber = 3;
        let buidsNumberArrayASC = buildHistory.buidsNumberArrayASC;
        
        createBuildsOfNewProject(projects.newProject, buildsNumber);

        cy.get('[href="/view/all/builds"]').click();
        cy.get('div h1').should('have.text', buildHistory.title);

        cy.get('.sortheader').contains('Build').click().click();
        cy.get('#projectStatus tbody tr td:nth-child(2) .inside').then(($buildNumber) => {
            let arrayActual = $buildNumber.text().match(/\d/g).join(' ').split(' ').map($el => Number($el));
    
            expect(arrayActual).to.deep.equal(buidsNumberArrayASC);
        });
    });

    it('AT_07.02_004 | Verify ascending sort order of builds.', () => {
        const cellTexts = [];

        for (let i = 0; i < projects.projects.length; i++) {
            cy.get('a[href$="/newJob"]').click();
            cy.get('input[name="name"]').type(projects.projects[i]);
            cy.get('.hudson_model_FreeStyleProject').click();
            cy.get('#ok-button').click();
            cy.get('#breadcrumbs a[href="/"]').click();
            cy.get(`[tooltip="Schedule a Build for ${projects.projects[i]}"]`).click();
        }
        cy.get('a[href$="/builds"]').click();

        cy.get('td[data]:not(td[data].jenkins-table__icon)').then((cells) => {
            cellTexts.push(...Array.from(cells).map((cell) => {
                return cell.innerText.trim();
            }));
            const sortedSelectCells = [...cellTexts].sort();
            expect(cellTexts).to.deep.equal(sortedSelectCells);
        })
    });
    
    it('AT_07.02_007 | Build History>Verify Sorting Builds', () => {
        const buildsNumber = 3;
        createBuildsOfNewProject(projects.newProject, buildsNumber); 

        cy.get('a[href$="/builds"]').click();
        cy.get('.sortheader').contains('Build').dblclick();
        cy.get('table#projectStatus td:nth-child(2)').then(($els) => {
        let actualStates = Cypress.$.makeArray($els).map(($el) => $el.innerText);
        console.log(actualStates)
        let expectedStates = actualStates.slice().sort();
        expect(actualStates).to.deep.eq(expectedStates);
        });
    });
});


