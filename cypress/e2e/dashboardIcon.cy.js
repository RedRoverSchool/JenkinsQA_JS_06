/// <reference types="cypress"/>

describe('<Dashboard> Icons S,M,L', () => {

    function createProject() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project 1')
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('button#ok-button').click()
        cy.get('button.jenkins-button--primary ').click()
    }

    function goToDashboard() {
        cy.get('#jenkins-home-link').click()
    }

    it('<Dashboard> Verify table size is L', () => {

        createProject()
        goToDashboard()

        cy.get('li[tooltip="Large"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
                    .should('eq', '0.55rem')
            })
        })
    })
})
