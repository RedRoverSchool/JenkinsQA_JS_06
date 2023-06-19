/// <reference types="cypress"/>

describe.skip('Header - head icon', () => {
    it('verify jenkins icon', function () {
      cy.get('a[href="/view/all/newJob"]').click();
      cy.get('#jenkins-name-icon').click();
      cy.get('div h1').should('be.visible');
      cy.get('#jenkins-name-icon').should('be.visible');
    });

    it('verify jenkins icon', function () {
      cy.get('#jenkins-name-icon').should('be.visible');
      cy.get('#jenkins-head-icon').should('be.visible');
      cy.get('#jenkins-name-icon').click();
      cy.url().should('contain' ,'localhost')
    })

});