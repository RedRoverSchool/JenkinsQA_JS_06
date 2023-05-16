/// <reference types='cypress' />

describe('Header Jenkins Logo', () =>{

    it('AT_01.01_030| Header Jenkins logo is visible and clickable', () => {
        cy.get('#jenkins-name-icon').should('be.visible');
        cy.get('#jenkins-home-link').click();
        cy.get('.empty-state-block h1').should('have.text', 'Welcome to Jenkins!')

    })
})