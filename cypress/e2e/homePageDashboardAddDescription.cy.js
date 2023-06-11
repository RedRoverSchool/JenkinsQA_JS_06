/// <reference types="cypress"/>
describe.skip('Home page (Dashboard) | Add Description',()=>{
    const addDescription = 'Add description'
    const messageInDescription = 'This is my new description'
    const editDescription = 'Edit description'

    it('AT_02.06_007 | Homepage (Dashboard)| Adding main panel description',()=>{
        cy.get('#description-link')
          .should('contain',addDescription)
          .click()
        cy.get('[name="description"]')
          .type(messageInDescription)
        cy.get('button[formnovalidate="formNoValidate"]')
          .should('have.text','Save')
          .click()
        cy.get('#description-link')
          .should('contain',editDescription)
          cy.get('#description').should('contain', messageInDescription)
    })
    
})
