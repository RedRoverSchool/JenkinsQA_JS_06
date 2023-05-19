/// <reference types="cypress" />

import headerCredentials from "../fixtures/headerCredentials.json"

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
})