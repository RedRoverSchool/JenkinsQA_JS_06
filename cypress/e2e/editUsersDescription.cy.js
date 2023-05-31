/// <reference types="cypress"/> 

import userDescrpiption from "../fixtures/userDescription.json";
import newUserDescription from "../fixtures/userDescription.json"

describe ('editUsersDescription', () =>{
    beforeEach(() =>{
        cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
        cy.get('.jenkins-table__link').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').clear().type(userDescrpiption.textDescription);
        cy.get('.jenkins-button--primary ').click();
        cy.get('#description').should('include.text',`${userDescrpiption.textDescription}`).and('exist');
    })

    it('AT_06.04_001 | Edit User_s Description', () =>{
        cy.get('#description-link').click();
        cy.get('.jenkins-input').clear().type(newUserDescription.textDesciptionNew);
        cy.get('.jenkins-button').click();
        cy.get('#description > :nth-child(1)').should('not.have.text', userDescrpiption.textDescription);
        cy.get('#description > :nth-child(1)').should('have.text', newUserDescription.textDesciptionNew);
        })
})