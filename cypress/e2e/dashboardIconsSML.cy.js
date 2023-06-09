/// <reference types="cypress" />
import pipelineName from '../fixtures/pipelineName.json'
import iconsSML from "../fixtures/iconsSML.json"

describe.skip('Dashboard | Icons S,M,L', () => {
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
    
    it('AT_20.01_005 |Dashboard| Icon M', () => {
        cy.get('[tooltip="Medium"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding))
                    .should('eq',iconsSML.mRem)
            })
        })
    })

    it('AT_20.01_006 |Dashboard| Icon L', () => {
        cy.get('[tooltip="Large"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding))
                    .should('eq',iconsSML.lRem)
            })
        })
    })

    iconsSML.sizes.forEach((sizeName, ind) => {
    it(`AT_20.01_010 | Verify Dashboard Icon ${sizeName} is working`,function (){
        cy.get('.jenkins-icon-size__items.jenkins-buttons-row>ol>li').as('sizeButtons')
        cy.get('@sizeButtons').eq(ind).click()
        cy.get('#projectstatus').then($el =>{
            const padding = window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding)
            expect(padding).to.equal(iconsSML.RemSize[ind])
            })
        })
    })
})
