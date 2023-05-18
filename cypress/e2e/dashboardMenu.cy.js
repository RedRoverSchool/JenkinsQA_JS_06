/// <reference types="cypress"/>

describe('Homepage(Dashboard)| Side panel sub-menu', () => {

    it('Homepage(Dashboard) | Check quantity of items on the panel sub-menu', function () {
        cy.get('.task-link-wrapper ').should('have.length', 5)
    })

    it('Homepage(Dashboard) | Verify "New Item" redirection', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', '/view/all/newJob')
    })
})
