/// <reference types='cypress'/>
import pipelineName from '../fixtures/pipelineName.json'

describe('Pipeline | Delete Created Project', () => {
    function createPipeline() {
        cy.get('span[class="task-link-text"]').contains('New Item').click({ force: true })
        cy.get('[name="name"]').type(pipelineName.newPipelineName)
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get("button[name='Submit']").click()
        cy.get('.jenkins-breadcrumbs__list-item').click()
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(pipelineName.newPipelineName).should('exist')
    }
    it('AT_13.02_001 | Pipeline Delete created project using dropdown menu', () => {
        createPipeline()

        cy.get('tbody tr td a.jenkins-table__link').realHover({ position: "center" })
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('.first-of-type :nth-child(4) .yuimenuitemlabel').should('contain', 'Delete Pipeline').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal(pipelineName.confirmationOfDeleting)
        })
        cy.get('#main-panel').contains(pipelineName.newPipelineName).should('not.exist')
    })
    it.only('AT_13.02_002 | Pipeline |Delete created project Pipeline in left side bar',()=>{
        createPipeline()

        cy.get('[class="jenkins-table__link model-link inside"] span')
          .should('have.text',pipelineName.newPipelineName)
          .click()
        cy.get(':nth-child(6) .task-link-wrapper .task-link span')
          .contains('Delete Pipeline')
          .click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`${pipelineName.confirmationOfDeletingFromSideBar} ‘${pipelineName.newPipelineName}’?`)
        })  
        cy.get('#main-panel').contains(pipelineName.newPipelineName).should('not.exist')
    })
})
