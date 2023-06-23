/// <reference types="cypress" />

import headerCredentials from "../fixtures/headerCredentials.json";

describe.skip('profilePageCredentialsLink', () => {

    it.skip('AT_18.06_001 | Profile Page | Verifying the Credentials link redirects to the users credentials page', () => {
        cy.get('#page-header a[class="model-link"] span[class="hidden-xs hidden-sm"]').then(
            ($element) => {
              const userNameOnThePage = $element.text();
              cy.get($element).click();
              cy.contains("h1", userNameOnThePage).should("be.visible");
            }
          );
          cy.get('#tasks span[class="task-link-wrapper "]').contains('Credentials').click()
          cy.url().should('contain', headerCredentials.credentialsPageUrl)
          cy.get('.jenkins-app-bar h1').should('have.text', headerCredentials.credentialsPageHeader)  
    })

    it.skip('AT_18.06.002 | <Profile Page> Link to User`s credentials', () => {
        cy.get('button:nth-child(3)').realHover().click();
        cy.get('#yui-gen4').click();
        cy.url().should('contain', headerCredentials.credentialsPageUrl);
        cy.get('.jenkins-app-bar__content').should('have.text', headerCredentials.credentialsPageHeader);
        cy.get('#main-panel > h2:nth-child(5)').should('contain',headerCredentials.storesScoped)
    })
})