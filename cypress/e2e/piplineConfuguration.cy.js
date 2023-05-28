import {createMultiBranchPipeline, createMultibranchPipeline} from "../support/helper";

describe('Multibranch Pipeline Configuration', function () {
    const newPipelineName = 'pipeline' + Date.now()
    const description = 'description' + Date.now()
    const displayName = 'displayName' + Date.now()
    const addSourse = ["Git", "GitHub", "Single repository & branch"]

    // function createMultibranchPipeline(pipelineName) {
    //     cy.get('a[href="newJob"]').click();
    //     cy.get('#name').type(pipelineName);
    //     cy.contains('Multibranch Pipeline').click();
    //     cy.get('#ok-button').click();
    //     cy.get('button[name=Submit]').click();
    // }

    beforeEach('Create multibranch pipeline', function () {

        createMultiBranchPipeline(newPipelineName);
        cy.get('a[href="./configure"]').click();

    })

    it.only('fill out and verify multibranch pipeline configuration General fields', function () {

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
    it('test1', function () {


        // cy.get('#branch-sources').should('contain', 'Branch Sources')
        // cy.get('#build-configuration').should('contain', 'Build Configuration')


        cy.get('#yui-gen1-button').realHover().click()
        cy.get('#yui-gen2 li').should('have.length', 3)
            .then($els => {
                const itemArray = Cypress.$.makeArray($els).map(($el) => $el.innerText);
                console.log('array', itemArray)
                expect(itemArray).to.deep.equal(addSourse)
                return cy.wrap(itemArray)

                //               }).click({force:true})
            })


        // //         .then($els =>{
        // //                const item = Cypress.$.makeArray($els).filter($el => $el.innerText == 'GitHub');
        // //                return cy.wrap(item)
        // //               }).click({force:true})
        // // })
        // cy.get(':nth-child(6) > :nth-child(2) > .jenkins-form-label').should('contain', 'Mode')
        // cy.get('select[class="jenkins-select__input dropdownList"]').should('contain', 'by Jenkinsfile')
        // cy.get('.jenkins-form-item > .jenkins-form-label').should('contain', 'Script Path')
        //
        // cy.get('a[title="Help for feature: Script Path"]').realHover().should('be.visible')
        // cy.get('input[name="_.scriptPath"]').should('be.visible')
        //
        // cy.get('#scan-multibranch-pipeline-triggers').should('contain', 'Scan Multibranch Pipeline Triggers')
        cy.get('div[class="help-sibling tr optional-block-start row-group-start row-set-start has-help"] label[class="attach-previous "]')
            .should('contain', 'Periodically if not otherwise run').click()
        // cy.get('a[title="Help for feature: Periodically if not otherwise run"]').realHover().should('be.visible').click()
        // cy.get('div[class="help"] div p:nth-child(1)').should('be.visible')
        // cy.get('.jenkins-form-item > .jenkins-form-label').should('contain', 'Interval')
        cy.get('.setting-main > .jenkins-select > .jenkins-select__input').select('20 minutes')
        // cy.get('.setting-main > .jenkins-select > .jenkins-select__input value').should('have.length', 19)
        //      .then($els =>{
        //                     const item = Cypress.$.makeArray($els).filter($el => $el.innerText == '20 minutes');
        //                     return cy.wrap(item)
        //                    }).click({force:true})
        // cy.get('#orphaned-item-strategy').should('contain', 'Orphaned Item Strategy')
        // cy.get('.setting-main > .jenkins-checkbox > .attach-previous')
        //     .should('contain', 'Abort builds').click()
        // cy.get('a[title="Help"]').realHover().should('be.visible')
        // cy.get('[name="orphanedItemStrategy"] > .optionalBlock-container > .optional-block-start > .jenkins-checkbox-help-wrapper > .jenkins-checkbox > .attach-previous')
        //     .should('contain', 'Discard old items')
        // cy.get('[name="orphanedItemStrategy"] > .optionalBlock-container > .form-container > :nth-child(1) > .jenkins-form-label').should('be.visible').and('contain', 'Days to keep old items')
        // cy.get('.form-container > :nth-child(2) > .jenkins-form-label').should('be.visible').and('contain', 'Max # of old items to keep')
        // cy.get('#appearance').should('be.visible').and('contain', 'Appearance')
        // cy.get('a[title="Help for feature: Icon"]').realHover().should('be.visible')
        // cy.get('select[class="jenkins-select__input dropdownList"]').should('be.visible').and('contain', 'Metadata Folder Icon')
        // cy.get('#health-metrics').should('be.visible').and('contain', 'Health metrics')
        // cy.get('button[class="jenkins-button advanced-button advancedButton"]').should('be.visible').and('contain', 'Health metrics').click()
        // cy.get('#yui-gen3-button').should('be.visible').and('contain', 'Add metric').click()

        // cy.get('#properties').should('be.visible').and('contain', 'Properties')
        // cy.get('.jenkins-section[nameref=rowSetStart4]').should('be.visible').and('contain', 'Pipeline Libraries')
        // cy.get('div[nameref="rowSetStart4"]').should('be.visible')
        // cy.get('#yui-gen5-button').should('be.visible').and('contain', 'Add').click()
        // cy.get('.repeated-chunk__header').should('be.visible').and('contain', 'Library').click()
        // cy.get('div[class="jenkins-form-label help-sibling"]').should('contain', "Name")
        // cy.get('input[name="_.name"]').should('be.visible')
    })

})