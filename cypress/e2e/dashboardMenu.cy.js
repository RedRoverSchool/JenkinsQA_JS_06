/// <reference types="cypress"/>

import {sidePanelItems} from '../fixtures/homePage.json'

describe('Homepage(Dashboard)| Side panel sub-menu', () => {

    it('Homepage(Dashboard) | Check quantity of items on the panel sub-menu', function () {
        cy.get('.task-link-wrapper ').should('have.length', 5)
    })

    it('AT_02.04.003 | Homepage(Dashboard) Check availability of side panel sub-menu with 5 items', () => {
        cy.get('#tasks .task-link-text')
          .should('have.length', sidePanelItems.length)
          .each(($el, idx) => {
            expect($el.text()).to.be.equal(sidePanelItems[idx])
        })
    })
})
