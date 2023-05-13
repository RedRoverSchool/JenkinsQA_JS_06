/// <reference types="cypress"/>

describe('User icon', () => {
    it('verify User icon dropdown menu ', function () {
      cy.get('a[href="/user/admin"] .jenkins-menu-dropdown-chevron').click({force: true} );
      cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span').should('be.visible').and('contains', 'Builds').click();
    });
      // cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span').should('be.visible').and('have.length', 5);
    
  
    // it('verify user can create a job', function () {
    //   cy.get('a[href="newJob"]').click()
    //   cy.get('input#name').type('Project1')
    //   cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
    //   cy.get('#ok-button').click()
    //   cy.get(':nth-child(1) > .model-link').click()
    // });
  
    // it('AT_02.09_002 | Verification "add description" button', function (){
    //   cy.get('#description-link').click()
    //   cy.get('.jenkins-input').should('be.visible')
    // })
  });