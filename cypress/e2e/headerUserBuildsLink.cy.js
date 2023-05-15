/// <reference types="cypress"/>

describe('Header - User Builds Link', () => {
  it('Verify menu item “Builds“ in “User” dropdown-menu displayed and clickable', () => {
    cy.get('div.login.page-header__hyperlinks button.jenkins-menu-dropdown-chevron').click({force:true})
    cy.get('li.yuimenuitem a span').contains('Builds').should('be.visible').and('include.text', 'Builds').click()
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

it('AT_01.04_006| Verify the side panel', () =>{
  let userBuilds = 'a[href="/user/admin/builds"].yuimenuitemlabel'
  let dropDown = 'button:nth-child(3)'
    cy.get(dropDown).click( {force: true});
    cy.get(userBuilds).click();
    cy.get('#side-panel').should('be.visible')
 });

});





