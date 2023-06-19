/// <reference types="cypress"/>

describe.skip('Folder Add Descriptions', () => {
})

it("Folder>Add description", () => {
    cy.get('#description-link').click()
    cy.get('textarea[class="jenkins-input   "]').type('My first test')
    cy.get('button[class="jenkins-button jenkins-button--primary "]').click()
})