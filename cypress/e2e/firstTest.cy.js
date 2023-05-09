/// <reference types="cypress"/>

describe('Jenkins Dashboard', () => {
  it('verify dropdown menu Dashboard', function () {
    cy.get('.jenkins-breadcrumbs__list-item > .model-link').should('have.text', 'Dashboard').realHover();
    cy.get('li.jenkins-breadcrumbs__list-item button.jenkins-menu-dropdown-chevron').click();
    cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span').should('be.visible').and('have.length', 5);
  });

  it('verify user can create a job', function () {
    cy.get('a[href="newJob"]').click()
    cy.get('input#name').type('Project1')
    cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
    cy.get('#ok-button').click()
    cy.get(':nth-child(1) > .model-link').click()
  });
});
