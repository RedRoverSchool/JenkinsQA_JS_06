import { createMultiBranchPipeline } from "../support/helper";
import multibranchPipline from "../fixtures/multibranchPipeline.json"

describe('Multibranch Pipeline Configuration', function () {

    const newPipelineName = 'pipeline' + Date.now()
    const descriptionText = 'description' + Date.now()
    const displayName = 'displayName' + Date.now()

    beforeEach('Create multibranch pipeline', function () {
        createMultiBranchPipeline(newPipelineName);
        cy.get('a[href="./configure"]').click();
    })

    it('AT 16.01.009|fill out and verify multibranch pipeline configuration General fields', function () {
        cy.get('.jenkins-form-item > .jenkins-form-label')
            .should('contain', multibranchPipline.configurationsFields.displayName)
        cy.get('a[title="Help for feature: Display Name"]')
            .click()
        cy.get('.jenkins-form-item > .help-area > .help > :nth-child(1)')
            .should('be.visible')
        cy.get('.jenkins-form-item > .jenkins-form-label')
            .should('contain', multibranchPipline.configurationsFields.description)
        cy.get('a[title="Help for feature: Display Name"]')
            .realHover()
            .should('be.visible')
        cy.get('input[name="_.displayNameOrNull"]')
            .should('be.visible')
            .type(displayName)
        cy.get('textarea[name="_.description"]')
            .should('be.visible')
            .type(descriptionText)
        cy.get('.textarea-show-preview')
            .should('contain', multibranchPipline.configurationsFields.preview)
            .click()
        cy.get('.textarea-preview').should('contain', descriptionText)
        cy.get('.textarea-hide-preview')
            .should('be.visible')
            .and('contain', multibranchPipline.configurationsFields.hidePreview)
        cy.get('.textarea-hide-preview')
            .click()
            .should('not.be.visible')
    });

    it.only('AT_16.01_011 | Verify visibility of configuration fields names -> Build Configuration', function () {
        cy.get('#build-configuration')
            .should('contain', multibranchPipline.configurationsFields.buildConfiguration)
        cy.get(':nth-child(6) > :nth-child(2) > .jenkins-form-label')
            .should('contain', multibranchPipline.configurationsFields.mode)
        cy.get('select[class="jenkins-select__input dropdownList"]')
            .should('contain', multibranchPipline.configurationsFields.byJenkinsfile)
        cy.get('.jenkins-form-item > .jenkins-form-label')
            .should('contain', multibranchPipline.configurationsFields.scriptPath)
        cy.get('a[title="Help for feature: Script Path"]')
            .realHover()
            .should('be.visible')
        })
})