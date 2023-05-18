/// <reference types="cypress"/>

import messages from '../fixtures/messages.json'
import projects from '../fixtures/projects.json'

describe('<Freestyle project> Delete created project', () => {
    
    it('Delete project using dropdown menu', function () {
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type('Project1')
      cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get(':nth-child(1) > .model-link').click()

      
      cy.get('tbody tr td a.jenkins-table__link').realHover({ position: "center" });
      cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
      cy.get('div#breadcrumb-menu ul li a').contains('Delete Project').click()

    cy.on('window:confirm', (str) => {
      expect(str).to.equal(messages.deleteConfirmMessage)
    })
  });

  it('Delete Freestyle project using dropdown menu_User_clicks_OK', () => {
    cy.get('#projectstatus tr td:nth-child(3)').contains(projects.freestyle.name).realHover()
    cy.get('table#projectstatus .jenkins-menu-dropdown-chevron').click()
    cy.get('.first-of-type li:nth-child(5)').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal(messages.deleteConfirmMessage)
    })
    cy.get('#search-box').type(`${projects.freestyle.name}{enter}`)
    cy.get('.error').should('contain.text', messages.error)
  })

  it('Delete Freestyle project using dropdown menu_User_clicks_Cancel', () => {
    cy.get('#projectstatus tr td:nth-child(3)').contains(projects.freestyle.name).realHover()
    cy.get('table#projectstatus .jenkins-menu-dropdown-chevron').click()
    cy.get('.first-of-type li:nth-child(5)').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal(messages.deleteConfirmMessage)
      return false
    })
    cy.get('table#projectstatus tbody').should('contain', projects.freestyle.name)
  })

  it('12.02_009 Deleting a Freestyle Project using the dropdown menu', () => {
    cy.get("[class*='jenkins-table'] .jenkins-menu-dropdown-chevron").realHover().click()
    cy.get('div#breadcrumb-menu ul li a').contains('Delete Project').click()

      cy.on('window:confirm', (str) => {
        expect(str).to.equal(messages.deleteConfirmMessage)
      })
    })
    const project = "FreeStyle"
    function createFreeProject(){
      cy.get(':nth-child(1) > .task-link-wrapper > .task-link').click()
      cy.url().should('includes','/view/all/newJob')
      cy.get('#name').type(project)
      cy.contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get('button[name="Submit"]').click()
      cy.contains(project).should('be.visible')
      cy.contains('Dashboard').click()
      cy.url().should('includes','http://localhost:8080/')
    }
    it('AT_12.02_010 | Freestyle project | Delete created project',()=>{
      createFreeProject()
      cy.get('.jenkins-table__link > span').realHover({ position: "center" })
      cy.get('#job_FreeStyle > :nth-child(3)').contains(project).click()
      cy.get(':nth-child(7) > .task-link-wrapper .task-link').should('have.text','Delete Project').click()

      cy.on('window:confirm', (str) => {
      expect(str).to.equal(`Delete the Project ‘${project}’?`)
      })
      cy.get('#main-panel').contains('Project Freestyle').should('not.exist')
    })
  });
  