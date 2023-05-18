/// <reference types="cypress"/>

describe("US_01.06 Header My views menu link", () => {
    it('TC_01.06_002 Header My views menu link', () => {
        cy.get('#side-panel').as('sidePanel');
        cy.get('@sidePanel').find('[href="/me/my-views"]').click();    
        cy.url().should('eq',`http://localhost:${Cypress.env('local.port')}/me/my-views/view/all/`);
        cy.get('@sidePanel').find('[href$="newJob"]').should('be.visible');
        cy.get('@sidePanel').find('[href="/asynchPeople/"]').should('be.visible');
        cy.get('@sidePanel').find('[href$="builds"]').should('be.visible');
    })

    it('AT_01.06_004| Header | Choosing "My Views" link in user dropdown-menu', () =>{
        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitemlabel').contains('My Views').click()
        cy.url().should('includes', '/my-views/view/all/')
    })
});
