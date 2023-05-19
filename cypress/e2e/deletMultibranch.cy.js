/// <reference types="cypress"/>

describe(`Delete Multibranch Pipeline`, () => {
    let projectName
    function creatyMultibranch() {
        projectName = 'NewMultibranch Pipeline'
        cy.contains('New Item').click()
        cy.get('#name').type(projectName)
        cy.contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.contains('Save').click()
        cy.get('#jenkins-name-icon').click()
        cy.contains(projectName).should('exist')
    }
    it('Delete Multibranch Pipeline throw dropDown menu', () => {
        creatyMultibranch()
        cy.get('#jenkins-name-icon').click()
        cy.get('.jenkins-table__link > span').should('have.text',projectName).realHover({ position: "center" })
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').click()
        cy.contains('Delete Multibranch Pipeline').click()
        cy.get('.jenkins-button').click()
        cy.get('#jenkins-name-icon').click()
        cy.contains(projectName).should('not.exist')
        
    })
});
