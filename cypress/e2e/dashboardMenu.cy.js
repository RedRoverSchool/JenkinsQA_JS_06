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

    it.skip('Homepage(Dashboard) | Verify "New Item" redirection', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
    })

    it('AT_02.04.005| Verify that the link "People" is clickable',() => {
        cy.get('a[href="/asynchPeople/"').click()
        cy.url().should('include',endPointUrl[1])
     })

     it('AT_02.04.006 | Verify that link "Build History" is clickable', () => {
        cy.get('a[href="/view/all/builds"]').click()
        cy.url().should('include', endPointUrl[2])
     })

     it('AT_02.04.007 | Verify that link "Manage Jenkins" is clickable', () => {
        cy.get('a[href="/manage"').click()
        cy.url().should('include', endPointUrl[3])
     })

     it('AT_02.04.008 | Verify that link "My Views" is clickable', () => {
        cy.get('a[href="/me/my-views"').click()
        cy.url().should('include', endPointUrl[4])
     })
     
     it('AT_02.04_016 | Verify that the left sidebar with 5 items is clickable', () => {        
        sidePanelItems.forEach((el, idx) => {
            cy.get('.task-link-wrapper').contains(sidePanelItems[idx]).click()
            cy.url().should('include',endPointUrl[idx])
            cy.get('#breadcrumbs a[href="/"]').click()
        })
     });
     it('AT_02.04_018 | Homepage(Dashboard) > Verification of Names on side panel', () => {
        cy.get('.task ')
          .should('have.length',sidePanelItems.length)
          .then(($els) => {
            return Cypress.$.makeArray($els).map($el => $el.innerText)
          })
          .should('deep.equal', sidePanelItems)
      })
})
