/// <reference types="cypress"/>

describe("Freestyle project - View project changes", () => {

    it("View project changes in freestyle project", () => {
        cy.get("#side-panel").click();
        cy.contains("New Item").click();
        cy.get("[class='add-item-name'] input[name='name']").type('Project2');
        cy.contains("Freestyle project").click();
        cy.get("#ok-button").click();
        cy.get("textarea[name='description']").type("Created new Project2");
        cy.get("button[name='Submit']").click();
        cy.get('.job-index-headline').should('be.visible');
        cy.get("li:nth-child(1) > a").click();
        
        cy.get('a[href="job/Project2/"]').should('have.text', 'Project2').realHover();
        cy.get('#job_Project2 > td:nth-child(3) button.jenkins-menu-dropdown-chevron').should('be.visible').click();
        cy.contains('Changes').click();
        cy.url().should('contain', 'changes');
        cy.contains('No builds.').should('be.visible');
    });

});