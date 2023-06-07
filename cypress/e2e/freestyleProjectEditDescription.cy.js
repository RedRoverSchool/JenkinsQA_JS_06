/// <reference types="cypress"/>
import createNewView from "../fixtures/createNewView.json"

describe('freestyleProjectEditDescription', () => {
    
    it('AT_12.07_002| Freestyle project > Add and edit description above existed project in List', function (){
      cy.get('#description-link').click();
      cy.get('.jenkins-input').clear().type(createNewView.jobName);
      cy.get('button[name="Submit"]').click()
      cy.get('#description').should('contain.text', createNewView.jobName)
      cy.get('#description-link').should('contain', createNewView.editButton).click();
      cy.get('.jenkins-input').clear().type(createNewView.editDescriptionText);
      cy.get('button[name="Submit"]').click()
     cy.get('#description').should('contain.text', createNewView.editDescriptionText)
    })

    it('AT_12.07.003 | Freestyle project> Verify possibility to edit description', () => {
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type(createNewView.jobName)
      cy.get('.hudson_model_FreeStyleProject').click()
      cy.get('#ok-button').click()
      cy.get('[name="description"]').type(createNewView.typeText)
      cy.get('[name="Submit"]').click()

      cy.get('#description-link').click()
      cy.get('[name="description"]').clear().type(createNewView.editDescriptionText)
      cy.get('.jenkins-button--primary ').click()
      cy.get('#description div:first-child').should('have.text', createNewView.editDescriptionText)
    })

    it('AT_12.07_004| Freestyle project > Add and edit description into project from List', function () {
      cy.get('a[href="newJob"]').click()
      cy.get('input#name').type(createNewView.jobName)
      cy.get('li[tabindex="0"] span').contains(createNewView.freestyleProject).click()
      cy.get('#ok-button').click()
      cy.get(':nth-child(1) > .model-link').click()
      cy.get('.jenkins-table__link > span').click()
      
      cy.get('#description-link').click()
      cy.get('.jenkins-input').clear().type(createNewView.typeText);
      cy.get('.jenkins-button.jenkins-button--primary').click()
      cy.get('#description').should('contain.text', createNewView.typeText)
      cy.get('#description-link').should('contain', createNewView.editButton).click()
      cy.get('.jenkins-input').clear().type(createNewView.editDescriptionText)
      cy.get('.jenkins-button.jenkins-button--primary').click()
      cy.get('#description').should('contain.text', createNewView.editDescriptionText)
    })

    it.only('AT_12.07_001 | Freestyle project> Edit description> Verify possiblity to type the text', function () {
      cy.get('a[href$="/newJob"]').click();
      cy.get('#name').type(createNewView.jobName);
      cy.get('.hudson_model_FreeStyleProject').click();
      cy.get('#ok-button').click();
      cy.get('#general').should('have.text', createNewView.header);
      cy.get('.jenkins-button--primary').click();
      
      // cy.get('#description-link').should('be.visible').and('includes.text', createNewView.description).click();
      // cy.get('.jenkins-input').should('be.visible').type(createNewView.typeText)
      // cy.get('.jenkins-button--primary').click();
      // cy.get('#description').contains(createNewView.typeText);
      // cy.get('#description-link').should('be.visible').and('includes.text', createNewView.description).click();
      // cy.get('.jenkins-input').clear();
      // cy.get('.jenkins-input').should('be.visible').type(createNewView.editDescriptionText);
      // cy.get('.jenkins-button--primary').click();
      cy.get('#description').contains(createNewView.editDescriptionText);
      cy.get('#description-link').should('be.visible').and('includes.text', createNewView.editButton)
    })
  })
