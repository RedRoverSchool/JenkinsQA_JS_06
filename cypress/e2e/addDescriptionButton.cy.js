/// <reference types="cypress"/>

describe('add description button', () => {
    
    it('AT_02.09_002 |should click button and fillout the field', function (){
      cy.get('#description-link').click()
      cy.get('.jenkins-input')
        .clear()
        .type('test')
      cy.get('button[name="Submit"]').click()
      cy.get('#description-link').contains('Edit description')
      cy.get('div[id="description"] div:nth-child(1)').should('contain', 'test')
    })
})
  