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
    it('TC_01.06.05 Header My views menu link',()=>{
        cy.get('a[href="/user/admin"] .jenkins-menu-dropdown-chevron').click({force: true});
        cy.get('[href="/user/admin/my-views"]').click();
        cy.get('.content-block').should('have.text','Create a job');
        cy.get('[href="/user/admin/my-views/view/all/newJob"]').should('have.text','New Item');
        cy.get('[href="/asynchPeople/"] .task-link-text').should('have.text','People');
        cy.get('[href="/user/admin/my-views/view/all/builds"]').should('have.text','Build History')
    })
});
