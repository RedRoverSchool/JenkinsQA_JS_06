/// <reference types="cypress"/>
import myViewsAddDescr from "../fixtures/myViewsAddDescr.json"
describe.skip('<My Views > Add description',() => {
    it.skip('<My Views Add description>',function(){
        cy.contains('My Views').click() 
        cy.get('#description-link').click()
        cy.get('.jenkins-input').type('description')
        cy.get('.jenkins-button--primary').click()
    })
    
    it.skip('AT_09.02.001|Add descriprions of my views',()=>{
        cy.get('a[href*="/me/my-views"]').click()
        cy.get('#description-link').should('be.visible').click()
        cy.get('.jenkins-input').clear().type(myViewsAddDescr.describeText)
        cy.get('button[name="Submit"]').click()
        cy.get('#description div:first-child').should('be.visible').and('have.text', myViewsAddDescr.describeText)
        cy.get('a[href="editDescription"]').should('be.visible')
    })
})
