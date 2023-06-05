/// <reference types="cypress"/>
import pagePeopleText from "../fixtures/pagePeopleText.json"
import homePage from "../fixtures/homePage.json"

describe.skip("People page", () => {
    it.skip("AT_6.01_002 | People page tab", () => {
        cy.get("a[href='/asynchPeople/']").click()
        cy.get(".jenkins-app-bar__content").should("contain", "People")
        cy.url().should("contain", "/asynchPeople/")
    });

    it.skip('Verify redirection to People page', () => {
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get('.jenkins-app-bar__content').should('have.text', pagePeopleText.textPeoplePage);
    })

    it.skip ('AT_06.01_007 | Verify of url "People" page', () => {
        cy.get('#side-panel').contains(homePage.sidePanelItems[1]).click()
        cy.url().should('include', homePage.endPointUrl[1])
    })
});
