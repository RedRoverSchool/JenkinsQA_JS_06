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
        cy.contains('Dashboard').click();
    });

    it("AT_20.04 | <Dashboard>Jenkins Table:: Pipeline's name hoverable dropdown menu", () => {
        cy.get('.jenkins-table__link.model-link.inside button').realHover().realClick();
        cy.get('.first-of-type li').then($el => {
            let arr = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(arr.length).to.be.equal(7);
            expect(arr).to.be.deep.equal(pipelineDropdown.pipelineDropdownItems);
        })
     
    })

    it("AT_20.04_002| Verify Dropdown menu is visible", () => {
        cy.get('#projectstatus tbody button').realHover().click();
        cy.get('.first-of-type span').should('be.visible').and('have.length', 7).each(($el, idx) => {
            expect($el.text()).to.be.equal(pipelineDropdown.pipelineDropdownItems[idx])
        })
    })

    it("AT_20.04.003 | <Dashboard>Jenkins Table:: Pipeline's name hoverable dropdown menu", () => {
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(2)').realHover().click();
        cy.get('.first-of-type li').should('be.visible').then($el => {
            let arr = Cypress.$.makeArray($el).map($el => $el.innerText);
            expect(arr.length).to.be.equal(pipelineDropdown.pipelineDropdownItems.length);
            expect(arr).to.be.deep.equal(pipelineDropdown.pipelineDropdownItems);
        })





    })

})