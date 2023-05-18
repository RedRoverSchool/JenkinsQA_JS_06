/// <reference types="cypress"/>
import messages from "../fixtures/messages.json"
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
      cy.get('.task ').contains('New Item').click()
      cy.get('input#name').type(projects.freestyle.name)
      cy.get('#items li').contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get('#breadcrumbBar').contains('Dashboard').click()

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
      cy.get('.task ').contains('New Item').click()
      cy.get('input#name').type(projects.freestyle.name)
      cy.get('#items li').contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get('#breadcrumbBar').contains('Dashboard').click()

      cy.get('#projectstatus tr td:nth-child(3)').contains(projects.freestyle.name).realHover()
      cy.get('table#projectstatus .jenkins-menu-dropdown-chevron').click()
      cy.get('.first-of-type li:nth-child(5)').click()
      cy.on('window:confirm', (str) => {
        expect(str).to.equal(messages.deleteConfirmMessage)
        return false
      })
      cy.get('table#projectstatus tbody').should('contain', projects.freestyle.name)
    })

    it.only('AT_12.02_008 | Freestyle project| Delete created project with inside menu', () => {
      cy.get("a[href='/view/all/newJob']").click()
      cy.get('#name').type(projects.freestyle.name)
      cy.get('.hudson_model_FreeStyleProject').click()
      cy.get('#ok-button').click()
      cy.get('button[name="Submit"]').click()
      cy.get('#jenkins-name-icon').click()

      cy.get('.jenkins-table__link.model-link.inside').click()
      cy.get('a[data-message^="Delete the Project"]').click()
      cy.on('window:confirm',(str) => {
        expect(str).to.equal('Delete the Project ‘Brand_new_Freestyle_project’?')
      })
      cy.get('div[class="empty-state-block"] h1').should('have.text', 'Welcome to Jenkins!')
    })
    
  });