/// <reference types="cypress"/>

describe('Freestyle project > Configurate project', () => {
    let jobName = 'MyProject1';
    let description = 'New description';

    beforeEach('Create freestyle project', function () {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type(jobName);
        cy.contains('Freestyle project').click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
    });

    it('Freestyle project > Configure > Add description', () => {
        cy.contains('Configure').click();
        cy.get('textarea[name="description"]').type(description);
        cy.get('button[name=Submit]').click();
        cy.get('#description div:nth-child(1)').should('have.text', description);
    });
})
