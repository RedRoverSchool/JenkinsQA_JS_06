/// <reference types='cypress' />


describe('US 17.04 | Page-header', () => {

    it('TC 17.04 | Open "My views" tab from user dropdown', () => {
        cy.get('.page-header__hyperlinks .model-link .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.yuimenuitem').contains('My Views').click()
        cy.url().should('contain', 'view/all/')
    })
})