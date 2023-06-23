/// <reference types="cypress"/>
import userData from "../fixtures/renameProjectInvalid.json"

describe.skip('renameFreestyleProjectInvalid', () => {
    
    beforeEach ('Prepare freeStyle Project', function () {
      cy.get(".task-link").eq(0).click();
      cy.get("#name").type(userData.projectName);
      cy.get('.hudson_model_FreeStyleProject').click();
      cy.get('#ok-button').should('have.text', userData.ok).click();
      cy.get('.setting-main  textarea  ').eq(0).type(userData.text);
      cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary')
      .click();

      cy.get('.jenkins-breadcrumbs__list-item > .model-link').eq(0).click();

      cy.get('td> a > span').should('have.text', userData.projectName).realHover();
      cy.get('td> a > button').should('be.visible').click();
      cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span')
      .should('be.visible')
      .and('have.length', 6)
      .eq(5)
      .click();
  });
  
    it("AT_12.03.013 Rename project, new name isn't valid", () => {
      cy.get('input[name="newName"]').clear().type(userData.projectName);
      cy.get('button[name="Submit"]').click();

      cy.get('div h1').contains(userData.error);
      cy.get('div#main-panel p').should('have.text',userData.errorDescription);
  
    });
});