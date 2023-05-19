/// <reference types="cypress"/>
describe('Header | Head Icon', () => {
    
    it('Redirection to the homepage by label', function () {
        cy.visit(`http://localhost:8080/view/all/newJob`)
        cy.get('#jenkins-name-icon').click()
        cy.url().should('include',`http://localhost:8080/`)

    });
})