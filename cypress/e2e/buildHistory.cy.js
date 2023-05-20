/// <reference types="cypress"/>

describe('buildHistory', () => {
    it('AT_07.01 _001| Build History|Build History link is clickable', () => {
        cy.get('[href="/view/all/builds"]').click();
        cy.get('.jenkins-app-bar__content>h1').should('have.text', 'Build History of Jenkins');
    });

    it('AT_07.01_002| Build History Verify Build History link is clickable', () =>{
        cy.get('a[href="/view/all/builds"').click()
        cy.get('.jenkins-app-bar__content').should('have.text', 'Build History of Jenkins')
    })

    it('AT_07.01_003|<Build History> Verify date when the build was created is visible', () => {
    
        cy.get('#side-panel [href$="newJob"]').click();
        cy.get('.jenkins-input').type('project1')
        cy.get("li[class='hudson_model_FreeStyleProject']").click()
        cy.get("#ok-button").click()
        cy.get("button[name='Submit']").click()
        cy.get('.model-link').contains('Dashboard').click()
        cy.get('#job_project1').should('be.visible')
        cy.get('#job_project1 > :nth-child(7)').click()
        cy.get('[href="/view/all/builds"').click();
        cy.get('.jenkins-app-bar__content').should('have.text', 'Build History of Jenkins');
        cy.get('.label-event-blue').click();
        cy.get('.timeline-event-bubble-time').should('be.visible')
    });
})
