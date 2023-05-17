/// <reference types="cypress"/>

describe('<My Views > Add description',() => {

    let inputText = 'description';

    it ('<My Views Add description>', function() {
        cy.get('#description-link').click();
        cy.get('.jenkins-input').should('be.visible').type(inputText);
        cy.get('button[name="Submit"]').click();
        cy.get('#description').contains(inputText);
    });

});