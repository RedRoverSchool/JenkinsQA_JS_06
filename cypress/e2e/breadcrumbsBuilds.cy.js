/// <reference types="cypress" />

import breadcrumbsBuilds from "../fixtures/breadcrumbsBuilds.json"

const USERID = Cypress.env('local.admin.username').toLowerCase();
const PORT = Cypress.env('local.port')

describe('BreadcrumbsBuilds', () => {
    beforeEach('', () => {
        cy.get('a[href^="newJob"]').click();
        cy.get('input#name').type(breadcrumbsBuilds.nameOfProject);
        cy.get('li[class*=Project]:nth-child(1)').click();
        cy.get('#ok-button').click();
        cy.get('button[name~=Submit]').click();
    
        cy.get('.task a[onclick*=build]').click();
        cy.get('.task a[onclick*=build]').click();
    
        cy.get('a[href$=admin]').click();
        cy.get('a[href$=builds]').click();
    
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

        cy.get('div#main-panel h1').should('have.text', `Builds for ${USERID}`)
    })

    it('AT_04.06.002 clicking on S, M, L will change the icon size', function () {
        cy.get('.login .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('.first-of-type a[href$="/builds"]').click();

        cy.get('.jenkins-button[title="Small"]').click()
        cy.get('svg.svg-icon.icon-sm').should('have.css', 'height', '16px')
        cy.get('.jenkins-button[title="Medium"]').click()
        cy.get('svg.svg-icon.icon-md').should('have.css', 'height', '20.796875px')
        cy.get('a[href="/iconSize?32x32"]').click()
        cy.get('.svg-icon').should('have.css', 'height', '24px')
    })

    it('AT_04.06.005 verify "Icon legend" redirects User to "Icon legend" page', function () {
        cy.get('.login .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('.first-of-type a[href$="/builds"]').click();

        cy.get('a[href="/legend"]').click()
        cy.url().should('eq', `http://localhost:${PORT}/legend`)
        cy.get('div#main-panel h1').should('have.text', 'Icon legend')
    })

    it('AT_04.06.006 Breadcrumbs Builds user can sort the Builds list by time in ascending order', function () {
        cy.get('.login .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('.first-of-type a[href$="/builds"]').click();

        cy.get('th:nth-child(3)').click()
        cy.contains('sec').then((timeElements) => {
            for (let i = 0; i < timeElements.length - 1; i++) {
                const currentTime = timeElements[i];
                const nextTime = timeElements[i + 1];
                expect(currentTime).should.be.greaterThan(nextTime);
            }
        });
    })
});