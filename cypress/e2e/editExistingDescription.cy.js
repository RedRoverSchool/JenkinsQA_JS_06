/// <reference types="cypress"/>

import descriptionsProject from '../fixtures/descriptionsProject.json'

describe(`Edit description`, function () {
  const description = `text`;
  const newDescription = "new text";

  it(`Edit existing description`, function () {
    cy.contains(`My Views`).click();
    cy.get("#description-link").click();
    cy.get(`.jenkins-input`).type(description);
    cy.get(`.jenkins-button`).click();
    cy.get(`a[href="editDescription"]`).click();
    cy.get(`.jenkins-input`).clear().type(newDescription);
    cy.get(`#description div:nth-child(1)`).should(
      `not.have.text`,
      description
    );
  });

  it('AT_20.02_ 002| Dashboard | Verify the "Edit Description" link', ()=>{
      cy.get('#description-link').click()
      cy.get('.jenkins-input   ').type(descriptionsProject.addDescriptionProject)
      cy.get('button[name="Submit"]').click() 
      cy.should('exist',descriptionsProject.addDescriptionProject)
      cy.get('#description-link').click()
      cy.get('textarea[name="description"]').type('{selectall}{backspace}').type(descriptionsProject.addNewDescriptionProject)
      cy.get('button[formnovalidate="formNoValidate"]').click()
      cy.should('exist',descriptionsProject.addNewDescriptionProject)  
  })
});
