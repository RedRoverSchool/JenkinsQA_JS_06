/// <reference types="cypress"/>
import messages from "../fixtures/messages.json"

describe('<Freestyle project> Delete created project', () => {
    
    it('Delete project using dropdown menu', function () {
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type('Project1')
      cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get(':nth-child(1) > .model-link').click()

      
      cy.get('tbody tr td a.jenkins-table__link').realHover().should('have.attr', 'href');
      cy.get('tbody tr td a.jenkins-table__link span').should('have.text', 'Project1')
      cy.get('table#projectstatus tbody tr td:nth-child(3) a button').click()
      cy.get('div#breadcrumb-menu ul li a').contains('Delete Project').click();

      cy.on('window:confirm', (str) => {
            expect(str).to.equal(messages.deleteConfirmMessage);
      })
    });
  });
  