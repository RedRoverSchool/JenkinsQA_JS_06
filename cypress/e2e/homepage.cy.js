/// <reference types="cypress"/>

describe('Homepage', () => {

  it('Verify Homepage Link "Learn more about distributed builds" is working', () => {
      
      cy.get('.content-block__link.content-block__help-link').invoke('removeAttr', 'target').click()
      cy.get('#title-text').should('contain.text', 'Jenkins : Distributed builds')
      cy.url().should('eq', 'https://wiki.jenkins.io/display/JENKINS/Distributed+builds')
  });
});