/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'

describe('buildHistoryDeleteBuild', () => {

    beforeEach('Create a freestyle project and a build', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('#name').type(projects.freestyle.name)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#tasks div:nth-child(4)').click()
        cy.wait(1000)
        cy.get('#jenkins-home-link').click()
    });

    it('AT_07.03.001 | Build History > Verify deleting builds using “Delete build” button in the Build page', () => {
        cy.get('#tasks div:nth-child(3)').click()
        cy.get('.jenkins-table__link.jenkins-table__badge.model-link.inside').click()
        cy.get('#tasks div:nth-child(5)').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-home-link').click()
        cy.get('#tasks div:nth-child(3)').click()
        cy.get('.jenkins-table__link.jenkins-table__badge.model-link.inside').should('not.exist')
    })
})