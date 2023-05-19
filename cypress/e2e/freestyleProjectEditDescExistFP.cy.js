/// <reference types="cypress"/>

describe('Freestyle Project Add And Edit Description', () => {
    
    it('AT_12.07_002| Freestyle project > Add and edit description above existed project in List', function (){
      cy.get('#description-link').click();
      cy.get('.jenkins-input').clear().type('Description from Home page above list');
      cy.get('button[name="Submit"]').click()
      cy.get('#description').should('contain.text', 'Description from Home page above list')
      cy.get('#description-link').should('contain', 'Edit description').click();
      cy.get('.jenkins-input').type('Modify Description + ');
      cy.get('button[name="Submit"]').click()
     cy.get('#description').should('contain.text', 'Modify Description')
    })

    it('AT_12.07.003 | Freestyle project> Verify possibility to edit description', () => {
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type('Project name')
      cy.get('.hudson_model_FreeStyleProject').click()
      cy.get('#ok-button').click()
      cy.get('[name="description"]').type('Description')
      cy.get('[name="Submit"]').click()

      cy.get('#description-link').click()
      cy.get('[name="description"]').type('New ')
      cy.get('.jenkins-button--primary ').click()

      cy.get('#description div:first-child').should('have.text', 'New Description')
    })

    it('AT_12.07_004| Freestyle project > Add and edit description into project from List', function () {
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type('Project1')
      cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get(':nth-child(1) > .model-link').click()
      cy.get('.jenkins-table__link > span').click()
      cy.get('#description-link').click()
      cy.get('.jenkins-input').clear().type('Description into the project');
      cy.get('.jenkins-button.jenkins-button--primary').click()
      cy.get('#description').should('contain.text', 'Description into the project')
      cy.get('#description-link').should('contain', 'Edit description').click()
      cy.get('.jenkins-input').type('Changing Description + ')
      cy.get('.jenkins-button.jenkins-button--primary').click()
      cy.get('#description').should('contain.text', 'Changing Description')
    })
})