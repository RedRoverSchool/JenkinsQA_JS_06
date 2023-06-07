/// <reference types="cypress"/>

describe.skip('Home page', () => {
it ('AC_02.09_005 |Verify add description button', () => {
cy.get('#description-link').should('be.visible').click()
cy.get('textarea[name="description"]').should('be.visible')
})

})