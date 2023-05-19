///<reference types="cypress"/>
import data from '../fixtures/multibranchPipeline.json';

describe('Multibranch Pipeline Disable/Enable', () => {
    it('AT_16.05.001 | Verify disable Multibranch Pipeline', () => {
        cy.get( 'a[href$="/newJob"]').click();
        cy.get('input.jenkins-input').type(data.newMultiPipeline);
        cy.get('.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click()
        cy.get('button[name="Submit"]').should('includes.text', data.messageDisable).click();
        cy.get('#enable-project').should('contain', data.enableMessage);
    });
});