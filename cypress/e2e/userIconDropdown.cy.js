/// <reference types="cypress"/>

describe('User icon', () => {
    
    it('verify user icon - Builds', function () {
      cy.get('a[href="/user/admin"]>.jenkins-menu-dropdown-chevron').realHover().click();
      cy.get('#breadcrumb-menu>.bd>.first-of-type:nth-child(1) li');
      cy.contains('Builds').click({falce:true})
      cy.url().should('eq', 'http://localhost:8080/user/admin/builds')
    });

    it('verify user icon - Configure', function () {
      cy.get('a[href="/user/admin"]>.jenkins-menu-dropdown-chevron').realHover().click();
      cy.get('#breadcrumb-menu>.bd>.first-of-type:nth-child(1) li')
        .contains('Configure').click({falce:true})
      cy.url().should('eq', 'http://localhost:8080/user/admin/configure')
    });

    it('verify user icon - My Views', function () {
      cy.get('a[href="/user/admin"]>.jenkins-menu-dropdown-chevron').realHover().click();
      cy.get('#breadcrumb-menu>.bd>.first-of-type:nth-child(1) li')
        .contains('My Views').click({falce:true})
      cy.url().should('eq', 'http://localhost:8080/user/admin/my-views/view/all/')
    });

    it('verify user icon - Credentials', function () {
      cy.get('a[href="/user/admin"]>.jenkins-menu-dropdown-chevron').realHover().click();
      cy.get('#breadcrumb-menu>.bd>.first-of-type:nth-child(1) li')
        .contains('Credentials').click({falce:true})
      cy.url().should('eq', 'http://localhost:8080/user/admin/credentials/')
    });
})