/// <reference types="cypress"/>

describe.skip('Home page>Verification "add description" button', () => {
    it('Verification "add description" button', function () {
        cy.get('#description-link').click()
        cy.get('#description').should('be.visible').click();        
    });

    it('AT_02.09_004 | Home page>Verification "add description" button', () =>{
        cy.get('#description-link').click()
        cy.get('#description > form').should('be.visible');  
    });
});
