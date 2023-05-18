/// <reference types="cypress" />
describe('footerJenkinsVerVerify', () =>{
    it('AT_03.02_001 | Footer> Link Jenkins ver number is correct', () =>{
        cy.get('.jenkins_ver a')
        .should('exist')
        .and('be.visible')
        .and('have.text','Jenkins 2.387.2')
        .and('have.attr','href','https://www.jenkins.io/')
        .and('have.css','color','rgb(20, 20, 31)')
    })
    it('AT_3.02_002 Link Jenkins redirects the user to the correct page', () =>{
        cy.get('.jenkins_ver a')
        .invoke('removeAttr','target')
        .click()
        
        cy.url().should("equal", "https://www.jenkins.io/")
        cy.get('h1 +p strong').should('contain','Build great things at any scale')
    })
})