/// <reference types = "cypress" />
const {
  getRandomNumber,
  createMultibranchPipeline,
  toggleAndSubmit
} = require('../support/helper')
import multibranchPipelineData from '../fixtures/multibranchPipeline.json'

describe('multiBranchPiplineEnableDisable', () => {
  beforeEach(() => {
    const randomNumber = getRandomNumber()
    createMultibranchPipeline(
      '.task:first-child',
      'input#name',
      '[id="j-add-item-type-nested-projects"]',
      '#ok-button',
      randomNumber,
      multibranchPipelineData.itemToCreate
    )
    toggleAndSubmit(
      '#toggle-switch-enable-disable-project',
      'button[name=Submit]'
    )
  })
  it.skip('AT_16.01.003 Disables the current Multibranch Pipeline', () => {
    cy.get('#enable-project')
      .should('contain', multibranchPipelineData.enableMessage)
      .and('have.css', 'color', multibranchPipelineData.enableMessageColor)

    cy.get('button[formnovalidate]')
      .should('include.text', multibranchPipelineData.enableButton)
      .click()
      .then(() => {
        cy.get('button[formnovalidate]').should(
          'have.css',
          'color',
          multibranchPipelineData.enableButtonColor
        )
      })
  })
  it.skip('AT_16.01.008 Enables the current Multibranch Pipeline', () => {
    cy.get('button[formnovalidate]').as('formButton').click()
    cy.get('@formButton')
      .should('include.text', multibranchPipelineData.disableButton)
      .should('have.css', 'color', multibranchPipelineData.enableButtonColor)
  })
  
})
