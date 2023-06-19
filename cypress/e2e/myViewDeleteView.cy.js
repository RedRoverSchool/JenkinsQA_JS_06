/// <reference types="cypress"/>

const myViewName = 'First Job'
const myView = 'MyView'
const deleteView = 'Delete View'

describe.skip('myViewsDeleteView', () => {
    it('AT_09.06.001 | <My views> Delete View', function () {
        cy.get('#tasks > div:nth-child(5) > span > a > span.task-link-text').realHover().click({ force: true });
        cy.get('a[href$="/newJob"]').click();
        cy.get('#name').type(myViewName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();
        cy.get(':nth-child(1) > .model-link').click();
        cy.get('.addTab').click();
        cy.get('#name').type(myView);
        cy.get('label[for="hudson.model.MyView"]').click();
        cy.get('#ok').click();
        cy.get('.active > a').click();
        cy.get('.task-link-text').contains(deleteView).click({ force: true });
        cy.get('#main-panel > form > button').click();
        cy.get('.addTab').contains(myView).should('not.exist');
    });
})

