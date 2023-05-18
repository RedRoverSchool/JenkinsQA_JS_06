/// <reference types='cypress' />

import freestyleDropdownItems from "../fixtures/freestyleDropdownMenu.json"

describe('dashboardFreestyleDropdownMenu', () => {

    beforeEach("Creat new Freestyle project", () => {
        cy.get('a[href="newJob"]').click();
        cy.get('.add-item-name .jenkins-input').type('NewFProject')
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-home-link').click()
    })

    it('AT_20.03_001 | Verify names of items of Freestyle projects name hoverable dropdown menu', () => {
        cy.get('.jenkins-table__link.model-link.inside button').click({ force: true })
        cy.get('.first-of-type li').then($el => {
            let array = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(array).to.be.deep.equal(freestyleDropdownItems.freestyleDropdownItems);
        })
    })
    
    it('AT_20.03_002 | Verify numbers of items of Freestyle projects name hoverable dropdown menu', () => {
        cy.get('.jenkins-table__link.model-link.inside button').click({ force: true })
        cy.get('.first-of-type li').should('have.length', freestyleDropdownItems.freestyleDropdownItems.length)
    })

})
