/// <reference types="cypress"/>

describe('Header - head icon', () => {
    it('verify jenkins icon', function () {
      cy.get('a[href="/view/all/newJob"]').click();
      cy.get('#jenkins-name-icon').click();
      cy.get('div h1').should('be.visible');
    });
});