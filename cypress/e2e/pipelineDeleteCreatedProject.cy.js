/// <reference types='cypress'/>
import pipelineName from '../fixtures/pipelineName.json'

describe('Pipeline | Delete Created Project', () => {
    beforeEach('Create New Pipeline',()=>{
        cy.get('span[class="task-link-text"]').contains(pipelineName.textForNewItem).click({ force: true })
        cy.get('[name="name"]').type(pipelineName.newPipelineName)
        cy.get('.label').contains(pipelineName.pipelineJob).click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click()
        cy.get('.jenkins-breadcrumbs__list-item').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(pipelineName.newPipelineName).should('exist')
    })   
    
    it('AT_13.02_001 | Pipeline Delete created project using dropdown menu', () => {
        cy.get('tbody tr td a.jenkins-table__link').realHover({ position: "center" })
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('.first-of-type :nth-child(4) .yuimenuitemlabel').should('contain', pipelineName.textForDeleteProject).click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal(pipelineName.confirmationOfDeleting)
        })
        cy.get('#main-panel').contains(pipelineName.newPipelineName).should('not.exist')
    })
    
    it('AT_13.02_002 | Pipeline |Delete created project Pipeline in left side bar',()=>{
        cy.get('[class="jenkins-table__link model-link inside"] span')
          .should('have.text',pipelineName.newPipelineName)
          .click()
        cy.get(':nth-child(6) .task-link-wrapper .task-link span')
          .contains(pipelineName.textForDeleteProject)
          .click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`${pipelineName.confirmationOfDeletingFromSideBar} ‘${pipelineName.newPipelineName}’?`)
        })  
        cy.get('#main-panel').contains(pipelineName.newPipelineName).should('not.exist')
    })

    it('AT_13.02.003 | Pipeline Delete created project within the selected Pipeline itself', () => {
        cy.get('.jenkins-table__link.model-link.inside').click()
        cy.get('.task-link-wrapper').contains(pipelineName.textForDeleteProject).click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`${pipelineName.confirmationOfDeletingFromSideBar} ‘${pipelineName.newPipelineName}’?`)
        })
        cy.get('#main-panel').should('not.have.text', pipelineName.newPipelineName)
    })
    it('AT_13.02.04|<Pipeline>Delete created project from the Jenkins project table',()=>{
        cy.get('.jenkins-table__link.model-link .jenkins-menu-dropdown-chevron').realHover({ position: "center" }).click()
        cy.get('.first-of-type :nth-child(4).yuimenuitem').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('pipelineName.confirmationOfDeleting')
        })
        cy.get('#main-panel').should('not.have.text',pipelineName.newNamePipeline)
    })
})
