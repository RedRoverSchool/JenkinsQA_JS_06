/// <reference types="cypress"/>

describe('add description button', () => {
    
    it.skip('AT_02.09_002 |should click button and fillout the field', function (){
      cy.get('#description-link').click()
      cy.get('.jenkins-input')
        .clear()
        .type('test')
      cy.get('button[name="Submit"]').click()
      cy.get('#description-link').contains('Edit description')
      cy.get('div[id="description"] div:nth-child(1)').should('contain', 'test')
    })

    it.skip('Add description via tab "My Views"', function () {
      cy.get('#tasks > div:nth-child(5) > span > a').click()
      cy.get('#description-link').should ('be.visible')
      cy.get('#description-link').click()
      cy.get('.jenkins-input').type('Hello')
      cy.get('.jenkins-button.jenkins-button--primary').click()
      cy.get ('#description > div:nth-child(1)').contains('Hello')
  })

  it.skip('AT_02.09_005|Verification "add description" button', function () {
    cy.get("#description-link").click()
    cy.get(".jenkins-input").should("be.visible")
  });

  it('AT_02.09.006|Home page, "add description" button is  clickable',() => {
    cy.get('#description-link').click()
    cy.get('.jenkins-input').should('be.visible')
  })
})
  