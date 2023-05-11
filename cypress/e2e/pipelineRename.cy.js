import pipelineName from "../fixtures/pipelineName.json"

describe('US_13.03 Pipeline.Rename pipeline project', () => {
    it('TC_13.03.001 Change Pipeline name using Rename button', () => {
        cy.get('a[href="newJob"]'). click()
        cy.get('input#name').type(pipelineName.namePipeline)
        cy.get('#j-add-item-type-standalone-projects li:nth-child(2)').click()
        cy.get('#ok-button').click()
        cy.get('#breadcrumbs li:first-child').click()

        cy.get('#projectstatus :nth-child(2) td:nth-child(3) a').click()
        cy.get('.task:nth-child(8)').click()
        cy.get('.jenkins-input.validated').clear().type(pipelineName.newNamePipeline)
        cy.get('button[name="Submit"]').click()
        cy.get('h1.job-index-headline').should('contain' , pipelineName.newNamePipeline)
    })
})