/// <reference types="cypress"/>

describe('footerRestApiLink', () => {
    it('AT_03.01_006 | Verify Footer > Link REST API', () => {
        cy.get('a[href="api/"]').click();
        cy.get('a[href="/api/"]').should('contain.text', 'API');
    });
});