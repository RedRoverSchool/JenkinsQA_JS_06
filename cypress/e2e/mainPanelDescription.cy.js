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

    it('AT_02.06_009 | Homepage (Dashboard) | Verify the user can change main panel description', () => {
      const firstDescription = 'This is my description of the main page!'
      const modifiedDescription = 'This is the modified description of the page.'
      cy.get('#description-link').click()
      cy.get('.jenkins-input   ')
        .should('be.visible')
        .type(firstDescription)
      cy.get('.jenkins-input   ').should('have.value', firstDescription)
      cy.get('#description button').click()
      cy.get('#description div:nth-child(1)').should('have.text', firstDescription)
      
      cy.get('#description-link').click()
      cy.get('.jenkins-input   ').should('have.value', firstDescription)
        .clear()
        .type(modifiedDescription)
        .should('have.value', modifiedDescription)
      cy.get('#description button').click()
      cy.get('#description div:nth-child(1)').should('have.text', modifiedDescription)
    })
})