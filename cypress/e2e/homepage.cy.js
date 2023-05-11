/// <reference types="cypress"/>

describe('Homepage', () => {

  it('Verify Homepage Link "Learn more about distributed builds" is working', () => {

      cy.get('.content-block__link.content-block__help-link').invoke('removeAttr', 'target').click()
      cy.get('#title-text').should('contain.text', 'Jenkins : Distributed builds')
      cy.url().should('eq', 'https://wiki.jenkins.io/display/JENKINS/Distributed+builds')
  });

  it("AT_02.05_002 | Redirection to wiki occurs after clicking the 'Learn more about distributed builds' link", () => {
    cy.intercept('GET', '**/Distributed+builds').as('reqToWiki');

    cy.get('a[href*=distributed-builds]')
      .should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target')
      .click();

    cy.wait('@reqToWiki').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200);
    });
  });
});
