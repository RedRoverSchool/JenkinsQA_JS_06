import {createMultiBranchPipeline, createMultibranchPipeline} from "../support/helper";

describe('Multibranch Pipeline Configuration', function () {

    const newPipelineName = 'pipeline' + Date.now()
    const description = 'description' + Date.now()
    const displayName = 'displayName' + Date.now()

    beforeEach('Create multibranch pipeline', function () {
        createMultiBranchPipeline(newPipelineName);
        cy.get('a[href="./configure"]').click();
    })

    it('AT 16.01.009|fill out and verify multibranch pipeline configuration General fields', function () {
        cy.get('.jenkins-form-item > .jenkins-form-label')
            .should('contain', 'Display Name')
        cy.get('a[title="Help for feature: Display Name"]')
            .click()
        cy.get('.jenkins-form-item > .help-area > .help > :nth-child(1)')
            .should('be.visible')
        cy.get('.jenkins-form-item > .jenkins-form-label')
            .should('contain', 'Description')
        cy.get('a[title="Help for feature: Display Name"]')
            .realHover()
            .should('be.visible')
        cy.get('input[name="_.displayNameOrNull"]')
            .should('be.visible')
            .type(displayName)
        cy.get('textarea[name="_.description"]')
            .should('be.visible')
            .type(description)
        cy.get('.textarea-show-preview')
            .should('contain', 'Preview')
            .click()
        cy.get('.textarea-preview').should('contain', description)
        cy.get('.textarea-hide-preview')
            .should('be.visible')
            .and('contain', 'Hide preview')
        cy.get('.textarea-hide-preview')
            .click()
            .should('not.be.visible')
    });
})