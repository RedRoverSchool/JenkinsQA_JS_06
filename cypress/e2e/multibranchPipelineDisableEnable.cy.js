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

    it('AT_16.05_002 | Multibranch Pipeline | Disable', () => {
        cy.get('.task a[href="/view/all/newJob"]').click()
        cy.get('input#name').type(data.newMultiPipeline)
        cy.get('div #items').contains(data.itemToCreate).click()
        cy.get(' #ok-button').click()
        cy.get(' button[name="Submit"]').click()
        cy.get('a[href="/"].model-link').click()
    
        cy.get('table#projectstatus').contains(data.newMultiPipeline).click()
        cy.get('div h1').should('contain', data.newMultiPipeline)
        cy.get('form#disable-project button').click()
    
        cy.get('form#enable-project')
          .should('contain', data.enableMessage)
          .and('have.css', 'color', data.enableMessageColor)
        cy.get('form#enable-project button').should('have.text', data.enableButton)
    });
});