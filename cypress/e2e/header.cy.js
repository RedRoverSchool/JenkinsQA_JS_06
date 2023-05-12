/// <reference types="cypress" />

describe('<Header> Head Icon', ()=>{

    it('Verify Jenkins Icon Functionality', function(){
    cy.get('#jenkins-name-icon').should('be.visible')
    cy.get('#jenkins-name-icon').click()
    cy.get('.empty-state-block > h1').should('contain', 'Welcome to Jenkins!')
    })
})
