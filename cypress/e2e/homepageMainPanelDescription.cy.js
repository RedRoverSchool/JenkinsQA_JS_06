/// <reference types="cypress"/>
import descriptions from '../fixtures/descriptionsProject.json';

describe('homepageMainPanelDescription',()=>{

    it('AT_02.06_11 | Homepage (Dashboard) > Adding Main panel description', () => {
        cy.get('#description-link').should('contain', descriptions.addDescriptionButtonText).click();
        cy.get('#description-link').should('not.exist');
        cy.get('[name="description"]').type(descriptions.addDescriptionProject);
        cy.get('.jenkins-button[formnovalidate="formNoValidate"]').should('have.text', descriptions.saveButtonText).click();
        cy.get('#description-link').should('contain', descriptions.editDescriptionButtonText);
        cy.get('#description').should('contain', descriptions.addDescriptionProject);
      })
    
})
