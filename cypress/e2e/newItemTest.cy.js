/// <reference types="cypress"/>
import newItemTest from '../fixtures/newItemTest.json'

describe.skip("newItemTest", () => {
    const orgFolderName = 'OrgFolderTest';
    const warningMessage = '» This field cannot be empty, please enter a valid name';

    it("New item, Create a new Pipeline", () => {
        cy.get("#side-panel").click();
        cy.contains("New Item").click();
        cy.get("[class='add-item-name'] input[name='name']").type(`Engineer `);
        cy.contains("Pipeline").click();
        cy.get("#ok-button").click();
        cy.get("textarea[name='description']").type("new create super project");
        cy.get("button[name='Submit']").click();
        cy.get("li:nth-child(1) > a").click();

        cy.get("[href$='Engineer/']").should("have.text", "Engineer");
    });

    it('Create a new Multibranch Pipeline', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type('Multibranch Pipeline')
        cy.get('.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#breadcrumbBar li:first-child').click()
        cy.get('.jenkins-table__link.model-link.inside').should('have.text', 'Multibranch Pipeline')
    });

    it.skip('AT_5.06_003 | Create an Organization folder with an empty Item Name', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('.jenkins_branch_OrganizationFolder').click();

        cy.get('#itemname-required').should('contain', newItemTest.warningMessage);
    })

});
