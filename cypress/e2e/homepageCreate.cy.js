/// <reference types="cypress"/>

describe('Homepage Create a job link', () => {
    it('AT_02.01_003 | Create a job link', () => {
        cy.get('a[href="newJob"]').should('be.visible').click();
        cy.url().should('contain', '/newJob')
    })
})
