/// <reference types="cypress"/>

import homePageData from "../fixtures/homePage.json";
import configurePageData from "../fixtures/configure.json";

describe('FreestyleProjectConfigurateProject', () => {   
    let description = 'New description';

    beforeEach('Create freestyle project', function () {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type(homePageData.projectName);
        cy.contains('Freestyle project').click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
    });

    it('AT_12.05_001 | Freestyle project > Add description', () => {
        cy.contains('Configure').click();
        cy.get('textarea[name="description"]').type(description);
        cy.get('button[name=Submit]').click();
        cy.get('#description div:nth-child(1)').should('have.text', description);
    });

    it('AT_12.05_004 | Add link on GitHub', () => {
        cy.get('.jenkins-breadcrumbs__list-item [href="/"]').click();
        cy.get('[href="job/MyProject1/"]').realHover();
        cy.get('[href="job/MyProject1/"] .jenkins-menu-dropdown-chevron').click({force : true});
        cy.get('#breadcrumb-menu').should('be.visible');
        cy.get('[href="/job/MyProject1/configure"]').click();
        cy.get('.jenkins-checkbox [name="githubProject"]').check({force : true});
        cy.get('input[name="_.projectUrlStr"]').type(configurePageData.gitHubProjectURL);
        cy.get('button[name="Submit"]').click();

        cy.get('[href="https://github.com/RedRoverSchool/JenkinsQA_JS_06/"]')
           .should('be.visible')
           .click();
        cy.url().should('include', 'RedRoverSchool/JenkinsQA_JS_06/'); 
        cy.get('.author').should('include.text', 'RedRoverSchool');
    })
})
