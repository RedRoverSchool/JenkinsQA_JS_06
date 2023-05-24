/// <reference types="cypress"/>

import projectNames from '../fixtures/newItemList.json'

describe('<New Item> Items Names and Icons', () => {

    it('TC_05.08_002 | <New Item>Verify that page with New Items displayed after click on the button New Item', () => {
        cy.contains('New Item').click()
        cy.get('.h3').should('have.text', 'Enter an item name')
    });

    it('AT_05.08_008 | New Item | Redirection to the "Create new item" page', () => {
        cy.get('a[href="/view/all/newJob"]').should('have.text', 'New Item').click()
        cy.url().should('include', '/view/all/newJob')
        cy.get('.h3').should('have.text', 'Enter an item name')
    });

    it('AT_05.08.10 | New Item | Verify Items Names and Icons are visible', () => {
       
        cy.contains('New Item').click()
        cy.get('#j-add-item-type-standalone-projects li span')
        .then($el => {
            let arr1 = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(arr1).to.be.deep.equal(projectNames.projectNames1);
        }); 
           
        cy.get('#j-add-item-type-nested-projects li span')
        .then($el => {
            let arr2 = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(arr2).to.be.deep.equal(projectNames.projectNames2);   
        });
    });
});