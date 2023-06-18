///<reference types="cypress"/>
const name = "Test";

describe.skip('Multibranch Pipeline', () => {

    beforeEach('Create Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(name);
        cy.contains('Multibranch Pipeline').click();
        cy.get('#ok-button').click();
    });
    
    it('AT_16.01.002 | Display Name and Description are saved', () => {        
        cy.get('input[name="_.displayNameOrNull"]').click().type(name + "1");
        cy.get('textarea[name="_.description"]').click().type(name +"2");
        cy.get('button[name="Submit"]').click();
        
        cy.get('#main-panel >h1').should('be.visible').and('have.text', "\n    " + name + "1\n  " );
        cy.get('#view-message').should('be.visible').and('have.text', name + "2" );
    })
})
