/// <reference types="cypress"/>

import {sidePanelItems, endPointUrl} from '../fixtures/homePage.json'

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

    it('Homepage(Dashboard) | Verify "New Item" redirection', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
    })

    it('AT_02.04.005| Verify that the link "People" is clickable',() => {
        cy.get('a[href="/asynchPeople/"').click()
        cy.url().should('include','/asynchPeople/')
     })

     it('AT_02.04.006 | Verify that link "Build History" is clickable', () => {
        cy.get('a[href="/view/all/builds"]').click()
        cy.url().should('include', endPointUrl[2])
     })
})
