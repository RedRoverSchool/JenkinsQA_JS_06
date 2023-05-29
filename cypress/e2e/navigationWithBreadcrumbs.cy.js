/// <reference types="cypress"/>

describe('navigationWithBreadcrumbs', () => {
    it('AT_04.01_01 | Verify clickability of user name link in Breadcrumbs', () => {
        cy.get('#side-panel div#tasks div:nth-child(5) a').click()

        cy.get('#breadcrumbBar li:nth-child(3)>a').click()
        cy.get('#main-panel > div:nth-child(4)').contains('Jenkins User ID:')
    })
 })