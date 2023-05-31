/// <reference types="cypress"/>

describe('pageHeaderSearchBox', () => {
    it('AT_01.02_005 verify Search Box is visible on the home page', function () {
        cy.get('#searchform').should('be.visible').click().type('project')
        cy.get('#search-box-sizer').should('have.text', 'project')
    });
    
    it('AT_01.02_009 verify Search Box is visible on the New Item page', function () {
        cy.get('.task  a[href="/view/all/newJob"]').click()
        cy.get('#searchform').should('be.visible').click().type('project') 
    });
    it('AT_01.02_010 verify Search Box is visible on the People page', function () {
        cy.get('.task  a[href="/asynchPeople/"]').click()
        cy.get('#searchform').should('be.visible')
    });
});