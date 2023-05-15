/// <reference types="cypress"/>
describe('<My Views > Add description',() => {
    it ('<My Views Add description>',function(){
        cy.contains('My Views').click() 
        cy.get('#description-link').click()
        cy.get('.jenkins-input').type('description')
        cy.get('.jenkins-button--primary').click()
    })
})

