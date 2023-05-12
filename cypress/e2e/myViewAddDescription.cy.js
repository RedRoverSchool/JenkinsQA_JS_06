/// <reference types="cypress"/>

describe(' <My Views>Add description', () => {

    it('Add description via tab "My Views"', function () {

        cy.get('#tasks > div:nth-child(5) > span > a').click()
        cy.get('#description-link').should ('be.visible')
        cy.get('#description-link').click()
        cy.get('.jenkins-input').type('Hello')
        cy.get('.jenkins-button.jenkins-button--primary').click()
        cy.get ('#description > div:nth-child(1)').contains('Hello')
    
    })
    
    })

