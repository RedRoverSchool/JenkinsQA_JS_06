/// <reference types="cypress"/>

describe('Dashboard', () => {

    it('Verify adding/editing  main panel description', () => {
        cy.get('#description-link').click()
        cy.get('.jenkins-input').should('exist')
          .type('This is my first project.')
        cy.get('button[name="Submit"]').click()
        cy.get('#description').should('contain', 'This is my first project.')
        cy.get('#description-link').click()
        cy.get('.jenkins-input').should('exist')
          .clear()
          .type('I am very happy to be there.')
        cy.get('button[name="Submit"]').click()
        cy.get('#description').should('contain', 'I am very happy to be there.')

    })
})