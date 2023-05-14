/// <reference types="cypress"/>

describe('Header - User Builds Link', () => {
    it('Verify menu item “Builds“ in “User” dropdown-menu displayed and clickable', function () {
      cy.get('a[href="/user/admin"] button.jenkins-menu-dropdown-chevron').click({force:true})
      cy.get('li.yuimenuitem a[href="/user/admin/builds"]').should('be.visible').and('include.text', 'Builds').click()
    });
    
    it('Verify redirected to the “Builds for User" page', function () {
      cy.get('a[href="/user/admin"] button.jenkins-menu-dropdown-chevron').click({force:true})
      cy.get('li.yuimenuitem a[href="/user/admin/builds"]').click()
      cy.url().should("contain", "/user/admin/builds")

      cy.get('a.model-link span.hidden-xs.hidden-sm').then(($span) => {
          const userName = $span.text()
          cy.get('h1').should('have.text', 'Builds for ' + userName)
        })
  }); 
});