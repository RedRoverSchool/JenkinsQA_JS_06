/// <reference types="cypress"/>

describe('Header - User Builds Link', () => {
  it('Verify menu item “Builds“ in “User” dropdown-menu displayed and clickable', () => {
    cy.get('div.login.page-header__hyperlinks button.jenkins-menu-dropdown-chevron').click({force:true})
    cy.get('li.yuimenuitem a span').contains('Builds').should('be.visible').and('include.text', 'Builds').click()
  });
    
  it('Verify redirected to the “Builds for User" page', () => {
    cy.get('div.login.page-header__hyperlinks button.jenkins-menu-dropdown-chevron').click({force:true})
    cy.get('li.yuimenuitem a span').contains('Builds').click()
    
    cy.get('a.model-link span.hidden-xs.hidden-sm').then(($span) => {
        const userName = $span.text()
        cy.url().should("contain", "/user/" + userName + "/builds")
        cy.get('h1').should('have.text', 'Builds for ' + userName)
    });
  }); 

  it('AT_01.04_006|<Header> User builds link| Verify the side panel', () =>{
       
      cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true} );
      cy.get('.yuimenuitemlabel').contains('Builds').click();
      cy.get('#side-panel').should('be.visible')
   });
  it('AT_01.04.05|Header User Builds link',()=>{
    cy.get('.login.page-header__hyperlinks .jenkins-menu-dropdown-chevron').click({force: true})
    cy.get('.yuimenuitem.first-of-type .yuimenuitemlabel').click() 
    cy.get('#tasks').should('be.visible')
   })
});

