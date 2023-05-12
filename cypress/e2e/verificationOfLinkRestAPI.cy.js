/// <reference types="cypress"/>
describe('<Footer> Verify Link REST API',()=>{
    it('Rest API link redirecting to the correct page',()=>{
        cy.get('a[href="api/"]').click()
        cy.url().should('includes','/api/')
    })
})