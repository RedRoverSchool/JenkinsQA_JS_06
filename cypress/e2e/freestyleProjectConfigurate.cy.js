/// <reference types="cypress"/>

import homePageData from "../fixtures/homePage.json";
import configurePageData from "../fixtures/configure.json";
import configure from '../fixtures/configure.json'

describe('FreestyleProjectConfigurateProject', () => {   
    let description = 'New description';

    beforeEach('Create freestyle project', function () {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type(homePageData.projectName);
        cy.contains('Freestyle project').click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
    });

    function getPostBuildActionsDropDownMenu() {
        return cy.get('.config-table .jenkins-section:nth-child(11) .yui-module .bd li')
    }

    it.skip('AT_12.05_001 | Freestyle project > Add description', () => {
        cy.contains('Configure').click();
        cy.get('textarea[name="description"]').type(description);
        cy.get('button[name=Submit]').click();
        cy.get('#description div:nth-child(1)').should('have.text', description);
    });

    it.skip('AT_12.05_004 | Add link on GitHub', () => {
        cy.get('.jenkins-breadcrumbs__list-item [href="/"]').click();
        cy.get('.jenkins-table__link').realHover();
        cy.get('.jenkins-table__link .jenkins-menu-dropdown-chevron').click({force : true});
        cy.get('#breadcrumb-menu').should('be.visible');
        cy.get('[href*="configure"]').click();
        cy.get('.jenkins-checkbox [name="githubProject"]').check({force : true});
        cy.get('input[name="_.projectUrlStr"]').type(configurePageData.gitHubProjectURL);
        cy.get('button[name="Submit"]').click();

        cy.get('[href="https://github.com/RedRoverSchool/JenkinsQA_JS_06/"]')
           .should('be.visible')
           .click();
        cy.url().should('be.eq', configurePageData.gitHubProjectURL); 
        cy.get('.author').should('include.text', configurePageData.gitHeaderAuthor);
    })

    it.skip('AT_12.05_005| Verify user can choose any builder from the dropdown menu list <Add build step> while configuring the freestyle project', () => {
        cy.get('#tasks a[href$="configure"]').click()
        cy.get('button[data-section-id="build-steps"]').click()
        configure.buildSteps.selectBuildStep.forEach(builderOption => {
            cy.get('button.hetero-list-add').contains(configure.buildSteps.addBuildStepButtonName).click()
            cy.get('.config-table .jenkins-section:nth-child(10) .yui-module .bd li').then(($els) => {
                const builder = Cypress.$.makeArray($els).filter($el => $el.innerText == builderOption)
                return cy.wrap(builder) 
            }).click()
            cy.get('[name="builder"]')
                .should('exist')
                .and('be.visible')
            cy.get('.repeated-chunk__header button.repeatable-delete').click()
        })
    })

    xit('AT_12.05_006 | Verify <Source Code Management> <GiT> tooltip text box is visible and displays correct information when User is hovering over tooltip', () => {
        cy.get('#tasks a[href$="configure"]').click()
        cy.get('button[data-section-id="source-code-management"]').click()
        cy.get('.config-table .jenkins-section:nth-child(7) .jenkins-radio-help-wrapper [tooltip]:nth-child(2)').trigger('focus')
        cy.get('#tippy-20').should('be.visible')
        cy.get('#tippy-20 .tippy-content').should('have.text', configure.sourceCodeManagement.toolTips.git)
    })

    configure.postBuildActions.selectPostBuildsAction.forEach((actionName, idx) => {
        it.skip(`AT_12.05_008 | Verify user can choose ${actionName} from the dropdown menu list <Post-build Actions> while configuring the freestyle project`, () => {
            cy.get('#tasks a[href$="configure"]').click()
            cy.get('[data-section-id="post-build-actions"]').click()
            cy.get('button.hetero-list-add').contains(configure.postBuildActions.addPostBuildActionsButtonName).click()
            getPostBuildActionsDropDownMenu().eq(idx).click()
            cy.get('.repeated-chunk[name="publisher"]')
                .should('exist')
                .and('be.visible')
            cy.get('button[name="Submit"]').click()
            cy.get('#tasks a[href$="configure"]').click()
            cy.get('[data-section-id="post-build-actions"]').click()
            cy.get('[name="publisher"].repeated-chunk') 
                .should('exist')
                .and('be.visible')
            cy.get('.repeated-chunk__header').should('include.text', configure.postBuildActions.selectPostBuildsAction[idx])       
        })
        
    })

})
