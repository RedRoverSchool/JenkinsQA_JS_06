/// <reference types="cypress" />

import multibranchPipeline from '../fixtures/multibranchPipeline.json'

describe.skip('Multibranch Pipeline', () => {
    
    const newMultibranchPipeline = 'Multibranch Pipeline Project'

    it('Creation of a new Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(newMultibranchPipeline)
        cy.get('[id="j-add-item-type-nested-projects"]').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('[name="Submit"]').click()
        cy.get('h1').should('contain', 'Multibranch Pipeline Project')
    })

    it.skip('AT_05.05_009| Create a new Multibranch Pipeline using name with more then 255 valid characters(Negative scenario)', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(`${multibranchPipeline.character}`.repeat(`${multibranchPipeline.number}`))
        cy.get('[id="j-add-item-type-nested-projects"]').contains(`${multibranchPipeline.name}`).click()
        cy.get('#ok-button').click()
        cy.get('#error-description').should('contain', `${multibranchPipeline.errorMessage}`)
      })
})