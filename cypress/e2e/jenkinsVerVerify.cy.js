/// <reference types="cypress" />

describe('AT_3.02_001 Link Jenkins ver number is correct', () =>{
    it('Verify the link "Jenkins has ver 2.387.2"', () =>{
        cy.get('.jenkins_ver a')
        .should('exist')
        .and('be.visible')
        .and('have.text','Jenkins 2.387.2')
        .and('have.attr','href','https://www.jenkins.io/')
        .and('have.css','color','rgb(20, 20, 31)')
    })
 })
