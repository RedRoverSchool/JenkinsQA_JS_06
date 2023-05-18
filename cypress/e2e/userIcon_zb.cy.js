/// <reference types="cypress"/>

describe('Header | User icon', () => {

    it('AT_01.03_013| <Header> Verify "User Icon" is visible and clickable', () => {
        cy.get('.login > a.model-link').should('exist').click()
        cy.get('#main-panel h1').should('contain', 'admin')
    })

    it('AT_01.03_014| <Header> Verify dropdown menu from "User Icon"', () => {
        cy.get('.login > a.model-link > button').click({ force: true })
        cy.get('#breadcrumb-menu ul>li span')
            .should("have.length", 4).then(($elems) => {
                const element = Cypress.$.makeArray($elems).filter($elem => $elem.innerText == 'Builds')
                return cy.wrap(element)
            }).click()
        cy.get('#breadcrumbBar>ol>li:last-child').should('have.text', 'Builds')
    })

})


