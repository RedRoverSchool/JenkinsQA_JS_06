/// <reference types="cypress"/>
import loginPage from '../fixtures/logInPage.json';

describe.skip('Header Log out button', () => {
   
  it('AT_01.08_028', function (){
    cy.get('body > header:nth-child(2) > div:nth-child(3) > a:nth-child(4) > span:nth-child(2)').click()
   })
     
});
