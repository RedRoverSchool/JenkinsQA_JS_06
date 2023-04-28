/// <reference types="cypress"/>

describe('Jenkins Dashboard', () => {
    it('verify dropdown menu Dashboard', function() {
      cy.get('.jenkins-breadcrumbs__list-item > .model-link').should('have.text', 'Dashboard');
      cy.get('li.jenkins-breadcrumbs__list-item button.jenkins-menu-dropdown-chevron').click({force: true});
      cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span').should('be.visible').and('have.length', 5);
    });
});
