/// <reference types="cypress"/>
describe('New item',()=>{
    const nameOfPipeline = 'New Pipeline'
    it('Create a new Pipeline',()=>{
        cy.viewport(1920,1080)
        cy.get('span[class="task-link-text"]').contains('New Item').click({force: true})
        cy.get('[name="name"]').type(nameOfPipeline)
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click();
        cy.get('.jenkins-breadcrumbs__list-item').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(nameOfPipeline).should('exist').click()
        cy.get('[class="job-index-headline page-headline"]').should('have.text',`Pipeline ${nameOfPipeline}`)
    })
})