/// <reference types="cypress"/>

describe("newItemTest", () => {
    
    it("New Item, Create a new Multibranch Pipeline", () => {
        cy.get("#side-panel").click();
        cy.contains("New Item").click();
        cy.get("[class='add-item-name'] input[name='name']").type(`Engineer `);
        cy.contains("Multibranch Pipeline").click();
        cy.get("#ok-button").click();
        cy.get("button[name='Submit']").click();
        cy.get("#breadcrumbs > :nth-child(1) > .model-link").click();

        cy.get("[href$='Engineer/']").should("have.text", "Engineer");
        cy.get("[tooltip='Multibranch Pipeline']").should("be.visible")
        
    });

});