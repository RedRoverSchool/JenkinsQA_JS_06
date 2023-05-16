/// <reference types="cypress" />
describe('jenkinsVerVerify', () =>{
    it('AT_03.02_001 | Footer> Link Jenkins ver number is correct', () =>{
        cy.get('.jenkins_ver a')
        .should('exist')
        .and('be.visible')
        .and('have.text','Jenkins 2.387.2')
        .and('have.attr','href','https://www.jenkins.io/')
        .and('have.css','color','rgb(20, 20, 31)')
    })
})