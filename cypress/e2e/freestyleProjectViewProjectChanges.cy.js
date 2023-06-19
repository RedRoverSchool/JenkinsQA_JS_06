/// <reference types="cypress"/>
import data from "../fixtures/freestyleBuildConfigurations.json"

describe.skip("Freestyle project - View project changes", () => {

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

    it('Changes button is visible in the menu on the left side', ()=>{
        cy.contains('New Item').click();
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#name').type('Project2').click();
        cy.get('#ok-button').click();
        cy.get('[name = "Submit"]').click();

        cy.contains('Changes').should('be.visible');
    })

    it('AT_12.04_003 | Verify message "No changes in any of the builds."', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(data.projectName)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()

        cy.get('.icon-clock').click()
        cy.get('a[href="/job/Project1/changes"]').click()
        cy.get('#main-panel').should('includes.text', data.message)
    });

    it('AT_12.04_004 | Verify Changes icon on Jenkins dashboard by clicking on dropdown button', () => {
        cy.get('.task:nth-child(1)').contains('New Item').click();
        cy.get('.jenkins-input').type(data.projectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('.jenkins-button').click();
        cy.get('.jenkins-button.jenkins-button--primary ').click();
        cy.get('h1').should('includes.text', data.projectName)
        cy.get(':nth-child(1) > .model-link').click()

        cy.get('.jenkins-table__link.model-link.inside').should('includes.text', data.projectName).realHover();
        cy.get('.jenkins-table__link.model-link.inside > button').click()
        cy.get('.yuimenuitemlabel span').contains('Changes').should('have.text', 'Changes')
    });
});