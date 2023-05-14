/// <reference types="cypress"/>

describe('Header User Configure', () => {
    
    it('AT_1.05_001| <Header>User configure', function () {
        cy.get('.login .model-link').should('be.visible');
        cy.get('#page-header .login a.model-link button.jenkins-menu-dropdown-chevron').click({force:true});
        cy.get('#breadcrumb-menu li.yuimenuitem a span').contains('Configure').click();
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/configure`);
    });
})