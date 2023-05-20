/// <reference types="cypress" />

import breadcrumbsBuilds from "../fixtures/breadcrumbsBuilds.json"
//import {local.admin.username} from "../cypress.env.json"

describe('BreadcrumbsBuilds', () => {
    const userID = Cypress.env('local.admin.username').toLowerCase();
    beforeEach('', () => {
        cy.get('a[href^="newJob"]').click();
        cy.get('input#name').type(breadcrumbsBuilds.nameOfProject);
        cy.get('li[class*=Project]:nth-child(1)').click();
        cy.get('#ok-button').click();
        cy.get('button[name~=Submit]').click();
    
        cy.get('.task a[onclick*=build]').click();
        cy.get('.task a[onclick*=build]').click();
    
        //cy.get('a[href$=admin]').click();
        //cy.get('a[href$=builds]').click();
    
        });
        
    
    it('AT_04.06 _003 | Verify builds list is sorted in ascending order by default', () => {
            
        cy.get('#projectStatus th:nth-child(2) a').click();
    
        cy.get('th:nth-child(2) .sortarrow').should('contain', breadcrumbsBuilds.arrows.arrowUp);
        cy.get('#projectStatus tbody>tr:nth-child(odd)').should('contain', breadcrumbsBuilds.buildsNumbers.build_2);
        cy.get('#projectStatus tbody>tr:nth-child(even)').should('contain', breadcrumbsBuilds.buildsNumbers.build_1);
    
        });    

    it('AT_04.06 _004| Breadcrumbs | Builds for user page > Sorting the builds list by Build in descending order', () => {

        cy.get('#projectStatus th:nth-child(2) a').dblclick();

        cy.get('th:nth-child(2) .sortarrow').should('contain', breadcrumbsBuilds.arrows.arrowDown);
        cy.get('#projectStatus tbody>tr:nth-child(odd)').should('contain', breadcrumbsBuilds.buildsNumbers.build_1);
        cy.get('#projectStatus tbody>tr:nth-child(even)').should('contain', breadcrumbsBuilds.buildsNumbers.build_2);

    });

    
    it('AT_04.06.001 Breadcrumbs Builds user can see his username in the title of the table.', function () {
        cy.get('.login .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('.first-of-type a[href$="/builds"]').click();

        cy.get('div#main-panel h1').should('have.text', `Builds for ${userID}`)
    })
    
    });