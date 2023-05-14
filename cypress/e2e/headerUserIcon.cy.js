/// <reference types="cypress"/>

describe('Header User Icon', () => {
    
    it('AT_01.03_001 | Verify “User icon” is visible on the right side of the header', function () {
    cy.get('.login .model-link').should('be.visible');
    });

    it('AT_01.03_003| Header | User icon | Verification of the visibility of the dropdown menu', function () {
        cy.get('a[href= "/user/admin"] button').click({force:true})
        cy.get('ul.first-of-type').should('be.visible')
    })

    it('AT_01.03_004| Header | User icon | Ability to choose one of the menu-list option by clicking on it', function () {
        cy.get('a[href= "/user/admin"] button').click({force:true})
        cy.get('ul.first-of-type').should('be.visible')
        cy.get('ul.first-of-type span').contains('Builds').click()
        cy.url().should('contain', '/user/admin/builds')
    })
})
