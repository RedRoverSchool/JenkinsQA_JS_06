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
})