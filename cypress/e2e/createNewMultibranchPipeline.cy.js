/// <reference types="cypress"/>

describe('Create a new Multibranch Pipeline',()=>{
    const nameOfMultibranchPipeline = 'New Multibranch Pipeline'

    it('Create a new Multibranch Pipeline',()=>{
        cy.get('span[class="task-link-text"]').contains('New Item').click({force: true})
        cy.get('[name="name"]').type(nameOfMultibranchPipeline)
        cy.get('.label').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click()
        cy.get('#main-panel h1').contains(nameOfMultibranchPipeline)
        cy.get('#breadcrumbs :nth-child(1)').contains('Dashboard').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(nameOfMultibranchPipeline)
    })
})
