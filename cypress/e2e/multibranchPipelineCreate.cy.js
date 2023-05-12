/// <reference types="cypress" />

describe('Multibranch Pipeline', () => {
    
    const newMultibranchPipeline = 'Multibranch Pipeline Project'

    it('Creation of a new Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(newMultibranchPipeline)
        cy.get('[id="j-add-item-type-nested-projects"]').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('[name="Submit"]').click()
        cy.get('h1').should('contain', 'Multibranch Pipeline Project')
    })
})