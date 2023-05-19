import pipelineName from '../fixtures/pipelineName.json'

describe('New Item Create a new Multibranch Pipeline', () => {

    it('AT_05.05_004 Create a new Multibranch Pipeline using [+New Item]', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(pipelineName.namePipeline)
        cy.get('#j-add-item-type-nested-projects').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#main-panel').should('contain', pipelineName.namePipeline)
        cy.get('#breadcrumbBar li:nth-child(1)').click()
        cy.get('#projectstatus')
            .should('exist')
            .and('include.text', pipelineName.namePipeline)
    })
})