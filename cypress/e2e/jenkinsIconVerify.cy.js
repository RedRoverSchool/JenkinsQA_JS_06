/// <reference types="cypress"/>

describe('<Header>', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Verify Jenkins icon', function () {

        cy.get('#jenkins-head-icon').should('be.visible')
        cy.get('#jenkins-head-icon').click()
        cy.url().should('eq', 'http://localhost:8080/')

        cy.get('#jenkins-head-icon').should('have.css', 'height', '40px')
        cy.get('#jenkins-head-icon').should('have.css', 'vertical-align', 'middle')
    });

});




