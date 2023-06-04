/// <reference types="cypress"/>

import multibranchPipeline from '../fixtures/multibranchPipeline.json'

describe('Multibranch Pipeline. Configurate Multibranch Pipeline', () => {

  beforeEach('Create multibranch pipeline', function () {
      cy.get('a[href="newJob"]').click();
      cy.get('#name').type('job');
      cy.contains('Multibranch Pipeline').click();
      cy.get('#ok-button').click();
      cy.get('button[name=Submit]').click();
      cy.get('.content-block [href="./configure"]').click()
  });

  it('AT_16.01_01 | Create "job-1" configuration', () => {
      cy.get('.jenkins-input.validated').type('job-1')
      cy.get('[name="_.description"]').type('first job');
      cy.get('button[name=Submit]').click();
      cy.url().should('contain', '/job/job/')
      cy.get('h1').should('be.visible', 'job-1')
  });

  it('AT_16.01_06 | Verify the number of checkboxes', () => {
    cy.get('[type="checkbox"]').should('have.length', 4)
  })
  
  it.skip('AT_16.01_07 | Verify the "add metrics" are exist and visible', () => {
    cy.get('.advancedButton').click()
    cy.get('#yui-gen3-button').click()
    cy.get('#yui-gen6').should('be.visible', multibranchPipeline.addMetrics[0])
    cy.get('#yui-gen7').should('be.visible', multibranchPipeline.addMetrics[1])
  })

  it('AT_16.01_05 | Verify check boxes change color', () => {
    cy.get('#cb2')
    .realHover()
    .should('have.css', 'box-shadow')
  })

  it.skip ('AT_16.01.004 | Verify Change Appearance', function () {
    cy.get('#jenkins-home-link').click()
    cy.get('[class="icon-pipeline-multibranch-project icon-md"]').should('have.attr', 'title', multibranchPipeline.titles.multiBranchPipeline)
    cy.get('[class="jenkins-table__link model-link inside"]').click()
    cy.get('.content-block [href="./configure"]').click()
    cy.get('#side-panel #tasks button[data-section-id="appearance"]').click()
    cy.get('.jenkins-form-item.has-help > .jenkins-select select').select(multibranchPipeline.iconDrpDwn[0])
    cy.get('[name="Submit"]').click()
    cy.get('[class="icon-folder icon-xlg"]').should('have.attr', 'title', multibranchPipeline.titles.folder)
  })
})
