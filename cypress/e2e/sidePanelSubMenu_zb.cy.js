/// <reference types="cypress"/>

import { dashboardDropdownItems } from '../fixtures/homePage.json'

describe('Side panel sub menu', () => {
    it('AT_02.04_011 | <Homepage(Dashboard) > Verify names and number of items in the side panel menu', () => {
        cy.get('#tasks .task')
            .should("have.length", 5)
            .then(($elems) => {
                return Cypress.$.makeArray($elems).map($elem => $elem.innerText)
            })
            .should('deep.equal', dashboardDropdownItems)
    })

    it('AT_02.04_008 | Homepage(Dashboard) > Verify 5 items from the sub-menu', () => { 
        cy.get('.task-link-text')
            .should('have.length', dashboardDropdownItems.length)
            .each((el, idx) => {
                expect(el.text()).to.be.equal(dashboardDropdownItems[idx])
            })      
    })
})

