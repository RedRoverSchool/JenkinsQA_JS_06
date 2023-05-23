/// <reference types="cypress"/>
const LOCAL_PORT = Cypress.env('local.port')

describe('footerRestApiLink', () => {
    it('AT_03.01_006 | Verify Footer > Link REST API', () => {
        cy.get('a[href="api/"]').click();
        cy.get('a[href="/api/"]').should('contain.text', 'API');
    });

    it('AT_03.01_007 | Footer | Verify the clickability of a REST API button', () =>{
        cy.get('.page-footer__links a[href="api/').click();
        cy.get('#main-panel h1').should('have.text', 'REST API');
    })

    it('AT_03.007 | Footer | Link REST API Redirect', () => {
        cy.get('.page-footer a[href="api/"]').invoke('removeAttr', 'target').click()
        
        cy.url().should('equal', `http://localhost:${LOCAL_PORT}/api/`)
        cy.title().should('equal', 'Remote API [Jenkins]')
    })
});