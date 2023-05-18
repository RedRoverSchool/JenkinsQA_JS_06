/// <reference types="cypress" />

import headerCredentials from "../fixtures/headerCredentials.json"

describe('profilePageCredentialsLink', () => {

    it('AT_18.06_001 | Profile Page | Verifying the Credentials link redirects to the users credentials page', () => {
        cy.get('#page-header a[class="model-link"] span[class="hidden-xs hidden-sm"]').then(
            ($element) => {
              const userNameOnThePage = $element.text();
              cy.get($element).click();
              cy.contains("h1", userNameOnThePage).should("be.visible");
            }
          );
          cy.get('span[class="task-link-text"]').contains('Credentials').click({force: true})
          cy.url().should('contain', headerCredentials.credentialsPageUrl)
          cy.get('.jenkins-app-bar h1').should('have.text', headerCredentials.credentialsPageHeader)  
    })
})