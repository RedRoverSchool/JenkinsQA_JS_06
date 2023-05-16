describe('New Item Create a new Multibranch Pipeline', () => {
    it('Create a new Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type('TestPipeline')
        cy.get('#j-add-item-type-nested-projects').contains('Multibranch Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#main-panel').should('contain', 'TestPipeline')
        cy.get('#breadcrumbBar li:nth-child(1)').click()
        cy.get('#projectstatus')
            .should('exist')
            .and('include.text', 'TestPipeline')
    })
})