/// <reference types="cypress"/>

import newItemNames from '../fixtures/newItemNames.json'

describe('New Item |Items Names and Icons', () => {
    it('New Item is clickable', function () {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.h3').should('have.text', 'Enter an item name')

    })
    it('AT_05.08.12 New Item redirected to a new URL',()=>{
        cy.get('[href="/view/all/newJob"]').should('be.visible').click();
        cy.url().should('contain','/all/newJob');
        cy.get('.add-item-name').should('contain','Enter an item name');
    })

    it('AT_05.04.001 |<New item>the link is visible and clickable and redirected', () => {
        cy.get('[href="/view/all/newJob"]').should('be.visible')
        cy.get('[href="/view/all/newJob"]').should('have.text', 'New Item').click()
        cy.url().should('contain', '/view/all/newJob')
        cy.get('div.header .h3').should('have.text', newItemNames.headerText)
    })
})