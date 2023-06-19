// <reference types="cypress" />

describe.skip('AT_12.06_009 Freestyle project. Disable project', () => {

    it('Disable project.Message “This project is currently disabled” is visible ', () => {
        
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type('Project_01')
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('button.jenkins-button--primary ').click()
        cy.get('#jenkins-home-link').click()
        cy.get('a[href="/me/my-views"]').click()
        cy.get('a[href="job/Project_01/').click()
        cy.get('button.jenkins-button').click()
        cy.get('a[href="editDescription"]').click()
        cy.get('#enable-project').should('contain', 'This project is currently disabled') 
    });
})