/// <reference types="cypress"/>
describe('<Footer> Link Jenkins', () => {
  it('TC_03.02.005 | <Footer>Verify the Link Jenkins', () => {
    cy.get('.page-footer a[href="https://www.jenkins.io/"]').invoke('removeAttr', 'target').click()
    cy.url().should("equal", "https://www.jenkins.io/")
  })
})