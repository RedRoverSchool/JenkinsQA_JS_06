/// <reference types="cypress"/>
import descriptions from '../fixtures/descriptionsProject.json';

describe('homepageMainPanelDescription',()=>{
    beforeEach('Add description', function() {
        cy.get('#description-link').should('contain', descriptions.addDescriptionButtonText).click();
        cy.get('#description-link').should('not.exist');
        cy.get('[name="description"]').type(descriptions.addDescriptionProject);
        cy.get('.jenkins-button[formnovalidate="formNoValidate"]').should('have.text', descriptions.saveButtonText).click();
  });

    it('AT_02.06_11 | Homepage (Dashboard) > Adding Main panel description', () => {
        cy.get('#description-link').should('contain', descriptions.editDescriptionButtonText);
        cy.get('#description').should('contain', descriptions.addDescriptionProject);
      });
    
    it('AT_02.06_013 | Homepage (Dashboard) > Editing Main panel description', () => {
        cy.get('#description-link').should('contain', descriptions.editDescriptionButtonText).click();
        cy.get('#description-link').should('not.exist');
        cy.get('[name="description"]').clear().type(descriptions.editDescriptionProject);
        cy.get('.jenkins-button[formnovalidate="formNoValidate"]').should('have.text', descriptions.saveButtonText).click();
        cy.get('#description-link').should('contain', descriptions.editDescriptionButtonText);
        cy.get('#description').should('contain', descriptions.editDescriptionProject);
        cy.get('#description').should('not.contain', descriptions.addDescriptionProject);
      });
      
    it('AT_02.06_015 | Homepage (Dashboard) > Deleting Main panel description', () => {
        cy.get('#description-link').should('contain', descriptions.editDescriptionButtonText).click();
        cy.get('#description-link').should('not.exist');
        cy.get('[name="description"]').clear();
        cy.get('.jenkins-button[formnovalidate="formNoValidate"]').should('have.text', descriptions.saveButtonText).click();
        cy.get('#description').should('not.contain', descriptions.addDescriptionProject);
        cy.get('#description-link').should('contain', descriptions.addDescriptionButtonText);
    });

});
