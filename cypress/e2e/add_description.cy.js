/// <reference types="cypress" />

describe('AT_02.06_001 | Homepage (Dashboard) > Verify the Main panel description', ()=>{
    it('Verify the Main panel description', ()=>{
        cy.get('#description-link').click()
        cy.get('.jenkins-input ').type('Jenkins project')
        cy.get('button[name="Submit"]').click()
    })
})

