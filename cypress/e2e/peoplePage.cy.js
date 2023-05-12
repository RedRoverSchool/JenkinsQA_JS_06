/// <reference types="cypress"/>

describe("People page", () => {
    it("AT_6.01_002 | People page tab", () => {
        cy.get("a[href='/asynchPeople/']").click()
        cy.get(".jenkins-app-bar__content").should("contain", "People")
        cy.url().should("contain", "/asynchPeople/")
    });
});
