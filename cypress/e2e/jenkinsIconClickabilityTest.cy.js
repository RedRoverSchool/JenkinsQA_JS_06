/// <reference types="cypress" />

describe('Icon', () => {

    it('Clicability test', () =>{
    cy.get('a[href="/manage"]').click()
    cy.get('#jenkins-name-icon').click()
    cy.get('div h1').should('be.visible')
    cy.get('#jenkins-name-icon').should('be.visible')

    
    })
})