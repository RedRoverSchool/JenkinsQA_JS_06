/// <reference types="cypress"/>
import namePipeline from "../fixtures/renMultibranchPip.json"
import newNamePipeline from "../fixtures/renMultibranchPip.json"
describe('Multibranch Pipeline Rename', ()=>{
    beforeEach('Precondition: Create Multibranch Pipeline',()=>{
        cy.get('a[href="newJob"]').click()
        cy.get('li[tabindex="0"]').contains('Multibranch Pipeline').click()
        cy.get('input#name').type(namePipeline.name)
        cy.get('div[class="btn-decorator"]').click()   
    })
    it('Multibranch Pipeline Rename-inside the selected Multibranch Pipeline',()=>{
        cy.get('[class="model-link"]').contains('Dashboard').click()
        cy.get('a[href*="job/"]').click()
        cy.get('a[href$="/confirm-rename"]').click()
        cy.get('input[checkdependson="newName"]').clear().type(newNamePipeline.newName)
        cy.get('button[name="Submit"]').click()

        cy.get('div[id="main-panel"]').should('contain', newNamePipeline.newName)
        cy.get('div[id="page-body"]').should('contain', newNamePipeline.newName)
    });
});

