describe('my view create new view', function () {
    beforeEach('create the job', function () {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type('First job');
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click()
        cy.get(':nth-child(1) > .model-link').click()
    })

    it('AT 09.01.002 create new view', function () {
        cy.get('a[href="/me/my-views"]').click()
        cy.get('a[title="New View"]').click()
        cy.get('#name').type('first view');
        cy.get('[for="hudson.model.MyView"]').click()
        cy.get('#ok').click()
        cy.get('.tab.active').should('contain', 'first view')
    });
});
