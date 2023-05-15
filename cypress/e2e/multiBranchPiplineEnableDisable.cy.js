/// <reference types = "cypress" />
const { getRandomNumber  ,createMultibranchPipeline } = require('../support/helper');
import multibranchPipelineData from '../fixtures/multibranchPipeline.json';

describe('US_16.01 Enable or disable the current Multibranch Pipeline', () => {
    it.only('TC_16.01.003 Enables and disables the current Multibranch Pipeline', () => {
      const jobType = 'Multibranch Pipeline'
      createMultibranchPipeline('.task:first-child', 'input#name', '[id="j-add-item-type-nested-projects"]', '#ok-button',  getRandomNumber(),jobType);
      cy.get('#enable-disable-project').click({ force: true });
      cy.get('button[name=Submit]').click();

      cy.get('#enable-project').should('contain', multibranchPipelineData.enableMessage);
    });

  });
  