/// <reference types="cypress"/>

describe('<Header>User configure', () => {
    it('AT_01.05 _007 | <Header>The user is able to select the option "Configure" from the dropdown menu "User"', () => {
        cy.get('.login button').click({ force: true })
        cy.get('.yuimenuitemlabel').contains('Configure').click()
        cy.contains('ol', 'Configure')
    })

})