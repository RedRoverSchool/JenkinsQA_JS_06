import projects from '../fixtures/projects.json'

describe('pipelineCreate', () => {
    it('AT_05.02_001 | Create a new Pipeline', () => {
        cy.get('.task:first-child ').click()
        cy.get('input#name').type(projects.pipeline.name)
        cy.get('#j-add-item-type-standalone-projects li:nth-child(2)').click()
        cy.get('#ok-button').click()
        cy.get('#breadcrumbBar li:first-child').click()
        cy.get('table#projectstatus').should('contain', projects.pipeline.name)
    })

    it('Create a new Pipeline', () => {
        cy.contains('span[class="task-link-text"]', 'New Item').click({force:true})
        cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob').click()
        cy.get('.jenkins-input').type('New project')
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('li.jenkins-breadcrumbs__list-item').click()
        cy.get('a[href*="job/New%20project"]').should('be.visible')
    })

    it('Create a new Pipeline goin from People page', () => {
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input.jenkins-input').type(projects.pipeline.name)
        cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('li a[href="/"]').click()
        cy.get('table#projectstatus').should('contain', projects.pipeline.name)
    })

    it("Create a new Pipeline", () => {
        cy.get("#side-panel").click();
        cy.contains("New Item").click();
        cy.get("[class='add-item-name'] input[name='name']").type(`FirstProject `);
        cy.contains("Pipeline").click();
        cy.get("#ok-button").click();
        cy.get("textarea[name='description']").type("new create super project");
        cy.get("button[name='Submit']").click();
        cy.get("li:nth-child(1) > a").click();
        cy.get("[href$='FirstProject/']").should("have.text", "FirstProject");
    })
    
    it('Create new Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type('TestPipeline')
        cy.get('span.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('li.jenkins-breadcrumbs__list-item>a[href="/"]').click()
        cy.get('table.jenkins-table').should('contain', 'TestPipeline')
    })
});