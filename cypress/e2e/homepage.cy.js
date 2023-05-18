/// <reference types="cypress"/>

describe('Homepage', () => {

  it.skip('Verify Homepage Link "Learn more about distributed builds" is working', () => {

      cy.get('.content-block__link.content-block__help-link').invoke('removeAttr', 'target').click({force: true})
      cy.get('#title-text').should('contain.text', 'Jenkins : Distributed builds')
      cy.url().should('eq', 'https://wiki.jenkins.io/display/JENKINS/Distributed+builds')
  });

  it.skip("AT_02.05_002 | Redirection to wiki occurs after clicking the 'Learn more about distributed builds' link", () => {
    cy.intercept('GET', '**/Distributed+builds').as('reqToWiki');

    cy.get('a[href*=distributed-builds]')
      .should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target')
      .click();

    cy.wait('@reqToWiki').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200);
    });
  });
  
  it.skip('Verify Home page > Link "Learn more about distributed builds"',() => { 
    cy.get('a[href$="/redirect/distributed-builds"]').invoke('removeAttr', 'target').click()
    cy.url().should('include', '/display/JENKINS/Distributed+builds')
    cy.title().should('eq', 'Jenkins : Distributed builds')
  })

  it.skip('Verify Homepage Link "Learn more about distributed builds" is working', () => {
    cy.get('.content-block').contains('Learn more about distributed builds').invoke('removeAttr', 'target').click()
    cy.get("#title-text").should("contain.text", "Jenkins : Distributed builds")
    cy.url().should('eq', 'https://wiki.jenkins.io/display/JENKINS/Distributed+builds')
  });
})