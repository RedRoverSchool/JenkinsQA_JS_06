/// <reference types="cypress"/>

describe.skip('Header Jenkins Icon', () => {
    it.skip("AT_01.10.035 Header Jenkins icon visible and clickable", () => {
        cy.get('#jenkins-head-icon').should('be.visible').click()
        cy.get('.empty-state-block h1').should('have.text', 'Welcome to Jenkins!')
    })
  })