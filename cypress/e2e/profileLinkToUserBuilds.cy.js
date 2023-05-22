/// <reference types="cypress"/>

import userConfig from "../fixtures/userConfigure.json"

describe('profileLinkToUserBuilds', () =>{

    it('AT_18.03.001 | Profile Page | Link to Users Builds', () => {
        cy.get('a[href*="user"]').click();
        cy.get('.task-link-wrapper a[href*="/builds"]').click();
        cy.url().should('include', '/builds');
        cy.get('#main-panel h1').should('have.text', `${userConfig.BuildsHeader} ${Cypress.env('local.admin.username').toLowerCase()}`);  
    });
})



