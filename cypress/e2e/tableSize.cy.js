/// <reference types="cypress" />
describe ('Dashboard Icons S,M,L', ()=> {
    it ('Table size S', ()=> {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project1')
        cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
        cy.get('a[href="/iconSize?16x16"]').contains('S').click()

        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
                .should('eq', '0.2rem')
            })
        })
    })
})