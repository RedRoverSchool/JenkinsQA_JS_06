/// <reference types="cypress"/>
import newItemNames from "../fixtures/newItemNames.json"

describe('Homepage Create a job link', () => {
    it('AT_02.01_003 | Create a job link', () => {
        cy.get('a[href="newJob"]').should('be.visible').click();
        cy.url().should('contain', '/newJob')
    })
    it('AT_02.01.010 | Homepage Create a job link/check if the link works', function() {
        cy.get('[href="newJob"]').should('be.visible').click()
        cy.get('span.label').each(($el, idx) => {
          let name = $el.text();
          expect(name).to.include(newItemNames.projectNames[idx]);   
        })    
    })
})
