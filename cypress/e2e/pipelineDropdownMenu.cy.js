/// <reference types="cypress"/>
import pipelineDropdown from "../fixtures/pipelineDropdown.json"
describe('New item Create a new Pipeline', () => {
    const name = "Test";

    beforeEach('Create a new Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(name);
        cy.contains('Pipeline').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
    });

    it("AT_20.04 | <Dashboard>Jenkins Table:: Pipeline's name hoverable dropdown menu", () => {
        cy.contains('Dashboard').click();
        cy.get('.jenkins-table__link.model-link.inside button').realHover().realClick();
        cy.get('.first-of-type li').then($el => {
            let arr = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(arr.length).to.be.equal(7);
            expect(arr).to.be.deep.equal(pipelineDropdown.pipelineDropdownItems);
        })
    })
})