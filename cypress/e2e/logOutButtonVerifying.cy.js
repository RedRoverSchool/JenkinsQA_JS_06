/// <reference types="cypress"/>

describe('Header Log out button', () => {
  it('Verify logout button is clickable and redirects to login page', function () {
    cy.get('a[href="/logout"]').should('be.visible').and('have.text','log out').click();
    cy.url().should('contain', 'login');    
  }); 
  
  it('verify loG out button', function (){
    cy.get('body > header:nth-child(2) > div:nth-child(3) > a:nth-child(4) > span:nth-child(2)').click()
   })

});
