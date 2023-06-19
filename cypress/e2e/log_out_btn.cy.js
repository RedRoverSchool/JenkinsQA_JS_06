/// <reference types="cypress" />
describe.skip('Header > Log out button', ()=>{
    it('Verify log out btn', () => {
        cy.get('a[href="/logout"]').should('exist').should('have.text','log out').click()
    })
})