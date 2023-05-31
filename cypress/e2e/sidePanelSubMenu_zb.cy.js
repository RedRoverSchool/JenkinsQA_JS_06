/// <reference types="cypress"/>

import { dashboardDropdownItems } from '../fixtures/homePage.json'
import { endPointUrl } from '../fixtures/homePage.json'

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

    it('AT_02.04_012 | <Homepage(Dashboard) > Verify links of five items of the sub-menu of the side panel of the Dashboard', () => {
        const links = [];
        cy.get('#tasks .task')
            .each(($el, index) => {
                const id_text = $el.text()
                links.push(id_text)
                cy.get('#tasks .task').eq(index)
                    .as(`item${index}`)
            })
        cy.then(function () {
            links.forEach((link, index) => {
                cy.log(index)
                cy.get(`@item${index}`)
                    .should('be.visible')
                    .click()

                cy.url().should('contain', endPointUrl[index])
                
                cy.go('back')
            })
        })
    })

    it('AT_02.04_009 | Homepage(Dashboard) > Verify sub-menu', () => { 
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('.h3').contains('Enter an item name');
        cy.get('a[href="/"].model-link').click();
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get('.jenkins-app-bar__content h1').contains('People');
        cy.get('[aria-current="page"]').contains('People');
        cy.get('a[href="/"].model-link').click();
        cy.get('a[href="/view/all/builds"]').click();
        cy.get('.jenkins-app-bar__content').contains('Build History of Jenkins');
        cy.get('[aria-current="page"]').contains('Build History');
        cy.get('a[href="/"].model-link').click();
        cy.get('[href="/manage"]').click();
        cy.get('.jenkins-app-bar__content h1').contains('Manage Jenkins');
        cy.get('[href="/manage/"].model-link').contains('Manage Jenkins');
        cy.get('a[href="/"].model-link').click();
        cy.get('[href="/me/my-views"].task-link ').click();
        cy.get('[href="/me/my-views/"]').contains('My Views')
    })

    it('AT_02.04_013 | <Homepage(Dashboard)> Verify 5 items of the sub-menu', () => {
        cy.get('#tasks .task').should('have.length', dashboardDropdownItems.length)
        cy.get('a[href="/view/all/newJob"]').should('have.text', dashboardDropdownItems[0])
        cy.get('a[href="/asynchPeople/"]').should('have.text', dashboardDropdownItems[1])
        cy.get('a[href$="/builds"]').should('have.text', dashboardDropdownItems[2])
        cy.get('a[href="/manage"] .task-link-text').should('have.text', dashboardDropdownItems[3])
        cy.get('a[href="/me/my-views"] .task-link-text').should('have.text', dashboardDropdownItems[4])              
    })

    dashboardDropdownItems.forEach((fiveItems, idx) => {
        it(`AT_02.04_014 | <Homepage(Dashboard)> Verify all ${fiveItems} of the sub-menu redirect to the proper pages`, function () {
            cy.get('#tasks .task').as('links')
            cy.get('@links').eq(idx).click()
            cy.url().should('contain', endPointUrl[idx])
        })
    })
})

