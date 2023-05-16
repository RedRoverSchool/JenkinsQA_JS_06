/// <reference types="cypress" />

describe.skip('Header | notification icon', ()=> {
    const buttons = ["Set up agent", "Set up cloud", "Dismiss"]
    it.skip('verify buttons and links', ()=> {
        cy.get('#visible-sec-am-button')
          .should('be.visible')
          .click()
        cy.get('.jenkins-button.jenkins-button--primary ')
          .should('have.length', buttons.length)
          .then(($els)=> {
              return Cypress._.map($els, 'innerText')
            })
          .should('deep.equal', buttons)
        cy.get('#visible-sec-am-list a[href="/manage"]').should('have.text', 'Manage Jenkins')
    })
})
