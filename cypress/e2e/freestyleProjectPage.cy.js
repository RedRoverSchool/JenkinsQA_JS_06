/// <reference types="cypress"/>
import pages from "../fixtures/pages.json"

describe('freestyleProjectPage', () => {
    function creatFreestyleProject() {
        cy.get('div.task:nth-child(1)').click()
        cy.get('input[class="jenkins-input"]').type(pages.projectName)
        cy.get('span[class="label"]').contains(pages.folderName).click()
        cy.get('button[id="ok-button"]').click()
        cy.get('.jenkins-app-bar__content h1').should('have.text', pages.configurationPage)
        cy.get('button[name="Submit"]').click()
        cy.get('#main-panel h1').should('have.text', `Project ${pages.projectName}`)
    }

    it('AT_12.01.002 |Freestyle project > Verify project page', () => {
        creatFreestyleProject()

        cy.get('.jenkins-breadcrumbs__list-item a[href="/"]').click()
        cy.get('table[id="projectstatus"] tbody').contains(pages.projectName).should('be.visible').realHover().realClick()
        cy.get('#side-panel .task  span.task-link-wrapper ').should('have.length', pages.sidePanel.length)
            .then(($els) => {
                let actual = Cypress.$.makeArray($els).map($el => $el.innerText)

                expect(actual).to.be.deep.equal(pages.sidePanel)
            })
    })

    it('AT_12.01.004 |Freestyle project > Verify option add and delete description', () => {
        creatFreestyleProject()
        
        cy.get('#description-link').should('be.visible').click()
        cy.get('textarea[name="description"]').clear().type(pages.text)
        cy.get('button[class="jenkins-button jenkins-button--primary "]').click()
        cy.get('#description div:nth-child(1)').should('have.text', pages.text)
        cy.get('a[href="editDescription"]').click()
        cy.get('textarea[name="description"]').clear()
        cy.get('button[class="jenkins-button jenkins-button--primary "]').click()

        cy.get('#description div:nth-child(1)').should('not.have.text', pages.text).and('be.empty')
     })

     it('AC_12.01_006 | Freestyle project>project name is visible/clicable/redirects', () =>{
        creatFreestyleProject()
        cy.get('#jenkins-home-link').click()

        cy.get('#projectstatus tbody td a[href*="job"]')
        .should('be.visible')
        .should('have.text', pages.projectName)
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').realClick()
        cy.get('#main-panel h1').should('have.text', 'Project ' + pages.projectName)
     })
})
