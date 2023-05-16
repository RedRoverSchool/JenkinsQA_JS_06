/// <reference types="cypress"/>

describe('Multibranch Pipeline. Configurate Multibranch Pipeline', () => {

  beforeEach('Create multibranch pipeline', function () {
      cy.get('a[href="newJob"]').click();
      cy.get('#name').type('job');
      cy.contains('Multibranch Pipeline').click();
      cy.get('#ok-button').click();
      cy.get('button[name=Submit]').click();
  });

  it('AT_16.01_01 | Create "job-1" configuration', () => {
      cy.get('[href="/job/job/configure"]').click();
      cy.get('.jenkins-input.validated').type('job-1')
      cy.get('[name="_.description"]').type('first job');
      cy.get('button[name=Submit]').click();
      cy.url().should('contain', '/job/job/')
      cy.get('h1').should('be.visible', 'job-1')
  });
})