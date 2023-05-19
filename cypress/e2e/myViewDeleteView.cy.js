/// <reference types="cypress"/>


describe('myViewsDeleteView', () => {
    it('TC_09.06.001 | <My views> Delete View', function () {
        cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text').realHover();
        cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text').click({ force: true });
        cy.get('a[href$="/newJob"]').click();
        cy.get('#name').type('First Job');
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();
        cy.get(':nth-child(1) > .model-link').click();
        cy.get('.addTab').click();
        cy.get('#name').type('MyView');
        cy.get('label[for="hudson.model.MyView"]').click();
        cy.get('#ok').click();
        cy.get('.active > a').click();
        cy.get('.task-link-text').contains('Delete View').click({ force: true });
        cy.get('#main-panel > form > button').click();
        cy.get('.addTab').contains('MyView').should('not.exist');
    });
})

