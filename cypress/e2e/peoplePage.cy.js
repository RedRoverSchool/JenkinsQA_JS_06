/// <reference types="cypress"/>
import pagePeopleText from "../fixtures/pagePeopleText.json"

describe("People page", () => {
    it("AT_6.01_002 | People page tab", () => {
        cy.get("a[href='/asynchPeople/']").click()
        cy.get(".jenkins-app-bar__content").should("contain", "People")
        cy.url().should("contain", "/asynchPeople/")
    });

    it('Verify redirection to People page', () => {
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get('.jenkins-app-bar__content').should('have.text', pagePeopleText.textPeoplePage);
    })
});
