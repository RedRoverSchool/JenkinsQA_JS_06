/// <reference types="cypress"/>

describe('Create a new Multibranch Pipeline',()=>{
    const nameOfMultibranchPipeline = 'New Multibranch Pipeline'

    it.skip('Create a new Multibranch Pipeline',()=>{
        cy.get('span[class="task-link-text"]').contains('New Item').click({force: true})
        cy.get('[name="name"]').type(nameOfMultibranchPipeline)
        cy.get('.label').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click()
        cy.get('#main-panel h1').contains(nameOfMultibranchPipeline)
        cy.get('#breadcrumbs :nth-child(1)').contains('Dashboard').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(nameOfMultibranchPipeline)
    })
    it.skip('AT__05.05.010|<New Item > Create a new Multibranch Pipeline',()=>{
       cy.get('.task [href="/view/all/newJob"]').should('be.visible').click()
       cy.url().should('contain','/view/all/newJob')
       cy.get('.add-item-name').should('contain','Enter an item name')
       cy.get('.jenkins-input').type('nameOfMultibranchPipeline')
       cy.get('.label').contains('Multibranch Pipeline').click()
       cy.get('.btn-decorator').click()
       cy.get('.jenkins-button.jenkins-button--primary').click()
       cy.get('#jenkins-home-link').should('be.visible').click()
       cy.get('#projectstatus').should('contain','nameOfMultibranchPipeline')

    })
})
