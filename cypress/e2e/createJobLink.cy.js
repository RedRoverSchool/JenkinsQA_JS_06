/// <reference types="cypress"/>

describe('Homepage: Create a job link', () => {

    it('Create a job link', function () {

        cy.get('a[href*="newJob"].content-block__link').should('be.visible')
        cy.get('a[href*="newJob"].content-block__link').should('have.text', 'Create a job')
        cy.get('a[href*="newJob"].content-block__link').click()
        cy.url().should('contain', '/newJob')
    });

    it('Create job link', () => {
        cy.get('#main-panel .content-block a[href=newJob]').click();
        cy.url().should('eq',`http://localhost:${Cypress.env('local.port')}/newJob`);
    });
    
    it("Homepage Create a job link", () => { 
        cy.get('[href="newJob"]').click();
        cy.url().should(
          "eq",
          `http://localhost:${Cypress.env('local.port')}/newJob`
        );
    });

    it('AT_02.01.007|Homepage Create a job link', () => {
        cy.get('a[href="newJob"]').click();
        cy.get('.h3').should('have.text', 'Enter an item name')
    })
});
