/// <reference types="cypress"/>

describe('My Views>Create new view', () => {
  it('My Views>Create new view', function () {
    cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text').realHover();
    cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text').click({force:true});
    cy.get('a[href$="/newJob"]').click();
    cy.get('#name').type('Dima first job');
    cy.get('.hudson_model_FreeStyleProject').click();
    cy.get('#ok-button').click();
    cy.get('#general').should('have.text', 'General');
    cy.get('.jenkins-button--primary').click();
    cy.get('.job-index-headline').should('have.text', 'Project Dima first job');
    cy.get('#breadcrumbs > li:nth-child(1) > a').click();
    cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text')
      .should('have.text', 'My Views')
      .click({force: true})
      
    cy.get('#projectstatus-tabBar > div > div.tabBar > div:nth-child(2) > a').should('be.visible').click();
    cy.get('.jenkins-form-label.help-sibling').should('have.text', 'View name');
    cy.get('#name').type('New Dima job');
    cy.get('#createItemForm > div:nth-child(1) > div:nth-child(2) > fieldset > div:nth-child(4) > label').click();
    cy.get('#ok').click();
    cy.get('#projectstatus-tabBar > div > div.tabBar > div.tab.active > a').should('have.text', 'New Dima job');
    cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text').click({force: true});
    cy.get('#main-panel > form > button').click({force: true});
  });
})

