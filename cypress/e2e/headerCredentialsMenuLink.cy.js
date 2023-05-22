/// <reference types="cypress" />

import headerCredentials from "../fixtures/headerCredentials.json"

const login = Cypress.env('local.admin.username').toLowerCase();

describe('headerCredentialsMenuLink', () => {
    it('AT_ 01.07_002|Header|Credentials menu link|After redirect to the "Credentials" page the user has access to a list of credentials.', () => {
        cy.get('header button.jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('li.yuimenuitem a[href*="/credentials"]').click()

        cy.url().should('contain', headerCredentials.credentialsPageUrl)
        cy.get('.jenkins-app-bar h1').should('have.text', headerCredentials.credentialsPageHeader)

        cy.get('a[href*="/credentials/store/user"]')
          .contains('User')
          .realHover()
          .find('button')
          .click()

        cy.get('a[href*="/newDomain"]').click()
        cy.url().should('contain', headerCredentials.newDomainPageUrl)
        cy.get('#page-body h1').should('have.text', headerCredentials.newDomainPageHeader)
    })

    it('AT_01.07.003 | Header> Verify Redirection to Credentials Page', () => {
      cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
      cy.get('.yuimenuitem [href*=credentials]').click()

      cy.get('.jenkins-app-bar__content').should('contain', headerCredentials.credentialsPageHeader)
    })

    it('AT_01.07_004 | <Header> The users name should be visible in the header', () => {
      cy.get(`a[href="/user/${login}"]`).should('be.visible');
    });
})