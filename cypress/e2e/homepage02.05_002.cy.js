describe("US_02.05 | <Homepage> Link 'Learn more about distributed builds'", () => {
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
