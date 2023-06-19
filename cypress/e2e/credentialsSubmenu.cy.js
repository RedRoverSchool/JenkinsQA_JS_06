/// <reference types="cypress"/>
import headerCredentials from '../fixtures/headerCredentials.json'

describe.skip('credentialsSubmenu', () => {

    beforeEach(() => {
        cy.get('header .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('[href="/user/admin/credentials"] span').invoke('text').as('h1')
      })

    it.skip('AT_01.07_01 <Header> Credentials menu redirects to the corresponding page', () => {
        cy.get('#page-header .model-link').realHover();
        cy.get('.page-header__hyperlinks .jenkins-menu-dropdown-chevron').click();
        cy.get('.yuimenuitem[index="3"]').contains('Credentials').click();
        cy.url().should('contain', 'credentials');
        cy.get('h1').contains('Credentials');
    })


    it.skip('AT_01.07_009 | Verify Redirection to Credential Page from User Dropdown Menu', function () {
        cy.get('header .jenkins-menu-dropdown-chevron').realHover().click();
        cy.get('a[href="/user/admin/credentials"]').click()
        cy.url().should('include', headerCredentials.credentialsPageUrl)
        cy.get('.jenkins-app-bar__content h1').should('have.text', this.h1)
      });
})