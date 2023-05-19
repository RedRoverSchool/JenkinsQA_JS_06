/// <reference types="cypress"/>
describe('Multibranch Pipeline Rename', ()=>{
    let name='mew name'
    let name2='QA_V'
    beforeEach('Precondition: Create Multibranch Pipeline',()=>{
        cy.get('a[href="newJob"]').click()
        cy.get('li[tabindex="0"]').contains('Multibranch Pipeline').click()
        cy.get('input#name').type(name)
        cy.get('div[class="btn-decorator"]').click()   
    })
    it('Multibranch Pipeline Rename-inside the selected Multibranch Pipeline',()=>{
        cy.get('[class="model-link"]').contains('Dashboard').click()
        cy.get('a[href="job/mew%20name/"]').click()
        cy.get('a[href="/job/mew%20name/confirm-rename"]').click()
        cy.get('input[checkdependson="newName"]').clear()
        cy.get('input[checkdependson="newName"]').type(name2)
        cy.get('button[name="Submit"]').click()

        cy.get('div[id="main-panel"]').should('contain', 'QA_V')
        cy.get('div[id="page-body"]').should('contain', 'QA_V')
    });
});

