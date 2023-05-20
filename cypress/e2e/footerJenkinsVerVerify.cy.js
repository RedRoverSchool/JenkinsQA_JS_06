/// <reference types="cypress" />
import footerData from "../fixtures/footerData.json"

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

    it('AT_03.02.004 | Footer> Verify redirection to Jenkins website', () => {
        cy.get('footer .jenkins_ver a')
          .invoke('removeAttr', 'target')
          .click()

        cy.url(). should('eq', 'https://www.jenkins.io/')
    })

    it('Verify redirection to Jenkins webpage', () => {
        cy.get('a[rel="noopener noreferrer"]').invoke('removeAttr', 'target')
        cy.get('a[rel="noopener noreferrer"]').click()
        cy.url().should('include', footerData.jenkinsEndPointWebSite)
    });
    
})
