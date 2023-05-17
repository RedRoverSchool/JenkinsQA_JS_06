/// <reference types="cypress"/>

describe('Create a new Multibranch Pipeline', () => {
    const multibranchName ='NEWmultibranchName'
    it('Create Multibranch Pipeline', () => {
        cy.contains('New Item').click()
        cy.get('#name').type(multibranchName)
        cy.contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.contains('Save').click()
        cy.get('#jenkins-name-icon').click()
        cy.contains(multibranchName).should('exist')
    })

})
