/// <reference types="cypress"/>

describe('credentialsSubmenu', () => {

    it('AT_01.07_01 <Header> Credentials menu redirects to the corresponding page', () => {
        cy.get('#page-header .model-link').realHover();
        cy.get('.page-header__hyperlinks .jenkins-menu-dropdown-chevron').click();
        cy.get('.yuimenuitem[index="3"]').contains('Credentials').click();
        cy.url().should('contain', 'credentials');
        cy.get('h1').contains('Credentials');
    })
})