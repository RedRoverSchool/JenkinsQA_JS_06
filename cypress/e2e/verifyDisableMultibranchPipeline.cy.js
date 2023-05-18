///<reference types="cypress"/>
import data from '../fixtures/multibranchPipeline.json';

describe('Multibranch Pipeline - Disable/Enable Multibranch Pipeline', () => {
    it('AT_16.05.001 | Verify disable Multibranch Pipeline', () => {
        cy.get('.task:nth-child(1)').contains('New Item').click();
        cy.get('input.jenkins-input').type(data.newMultiPipeline);
        cy.get('.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click()
        cy.url().should('eq', 'http://localhost:8080/job/Multibranch_Pipeline/');
        cy.get('button[name="Submit"]').should('includes.text', 'Disable Multibranch Pipeline').click();
        cy.get('#enable-project').contains(data.enableMessage);
        cy.get('button[name="Submit"]').should('includes.text', 'Enable');
    });
});