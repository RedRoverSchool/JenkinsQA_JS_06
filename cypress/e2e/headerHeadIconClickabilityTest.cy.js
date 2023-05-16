/// <reference types="cypress" />

describe('headerHeadIconClicabilityTest', () => {

    it('AT_01.01_023| <Header>Head Icon clickability test', () =>{
    cy.get('a[href="/manage"]').click()
    cy.get('#jenkins-name-icon').click()
    cy.get('div h1').should('be.visible')
    cy.get('#jenkins-name-icon').should('be.visible')
    
    })
})