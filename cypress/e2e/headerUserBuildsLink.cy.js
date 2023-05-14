/// <reference types="cypress"/>

describe('Header - User Builds Link', () => {
    it('Verify menu item “Builds“ in “User” dropdown-menu displayed and clickable', function () {
      cy.get('a[href="/user/admin"] button.jenkins-menu-dropdown-chevron').click({force:true})
      cy.get('li.yuimenuitem a[href="/user/admin/builds"]').should('be.visible').and('include.text', 'Builds').click()
    });

});