/// <reference types="cypress"/>

describe(`Dashboard Edit Description`, () => {
    const text = 'Editing description check out'

    it(`Dashboard > Editing Description`, () => {
        cy.get('#description-link').click()
        cy.get('.jenkins-input')
          .clear()
          .type(text)
        cy.get('button[name="Submit"]').contains('Save').click()
        cy.get('#view-message').should('contain', text)
    });
});