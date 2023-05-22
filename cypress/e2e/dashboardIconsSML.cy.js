/// <reference types="cypress" />
import pipelineName from '../fixtures/pipelineName.json'
import iconsSML from "../fixtures/iconsSML.json"

describe('Dashboard | Icons S,M,L', () => {
    beforeEach('Create one job', () => {
        cy.get('span[class="task-link-text"]').contains(pipelineName.textForNewItem).click({ force: true })
        cy.get('[name="name"]').type(pipelineName.newPipelineName)
        cy.get('.label').contains(pipelineName.pipelineJob).click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click()
        cy.get('.jenkins-breadcrumbs__list-item').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(pipelineName.newPipelineName).should('exist')
    })

    it('AT_20.01_004 |Dashboard| Icon S', () => {
        cy.get('[tooltip="Small"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding))
                    .should('eq',iconsSML.sRem)
            })
        })
    })
})