/// <reference types="cypress"/>
describe('renameFreestyleProjectInvalid', () => {
    let projectName = "DemoJob";

    beforeEach ('Prepare freeStyle Project', function () {
      cy.get(".task-link").eq(0).click();
      cy.get("#name").type(projectName);
      cy.get('.hudson_model_FreeStyleProject').click();
      cy.get('#ok-button').should('have.text', 'OK').click();
      cy.get('.setting-main  textarea  ').eq(0).type('test');
      cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary')
      .click();

      cy.get('.jenkins-breadcrumbs__list-item > .model-link').eq(0).click();

      cy.get('td> a > span').should('have.text', projectName).realHover();
      cy.get('td> a > button').should('be.visible').click();
      cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span')
      .should('be.visible')
      .and('have.length', 6)
      .eq(5)
      .click();
  });
  
    it("AT_12.03.013 Rename project, new name isn't valid", () => {
      cy.get('input[name="newName"]').clear().type(projectName);
      cy.get('button[name="Submit"]').click();

      cy.get('div h1').contains("Error");
      cy.get('div#main-panel p').should('have.text','The new name is the same as the current name.');
  
    });
});