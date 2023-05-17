/// <reference types="cypress"/>

describe('Header | User icon', () => {
    it('AT_01.03_013| <Header> Verify "Use Icon" is visible and clickable', () => {
        cy.get('a[href="/user/admin"]').should('exist').click()
        cy.get('#main-panel h1').should('contain', 'admin')
    })

})


