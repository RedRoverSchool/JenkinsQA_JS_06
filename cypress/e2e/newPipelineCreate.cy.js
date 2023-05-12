describe('Create a new Pipeline', () => {
    const newPipeLineName = 'myFirstPipeLine_1'
    it('Create a new Pipeline', () => {
        cy.get('.task:first-child ').click()
        cy.get('input#name').type(newPipeLineName)
        cy.get('#j-add-item-type-standalone-projects li:nth-child(2)').click()
        cy.get('#ok-button').click()
        cy.get('#breadcrumbBar li:first-child').click()
        cy.get('table#projectstatus').should('contain', newPipeLineName)
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
})