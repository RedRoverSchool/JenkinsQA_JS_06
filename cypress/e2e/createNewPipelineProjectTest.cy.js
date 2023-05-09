/// <reference types="cypress"/>

describe("createNewPipelineProjectTest", () => {

    it("createNewPipelineProjectTest", () => {
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

});