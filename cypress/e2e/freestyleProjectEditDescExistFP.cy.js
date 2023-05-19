/// <reference types="cypress"/>

describe('FreestyleProjectEditDescription', () => {
    
    it('AT_12.07_002| FP> Edit description_One existed project in list', function (){
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type('Project1')
      cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
      cy.get('#ok-button').click()
      cy.get(':nth-child(1) > .model-link').click()

      cy.get('#description-link').click();
      cy.get('.jenkins-input').clear().type('Description from Home page');
      cy.get('button[name="Submit"]').click()
      cy.get('#description').contains('Description from Home page')
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
})