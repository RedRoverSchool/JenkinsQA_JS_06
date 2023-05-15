/// <reference types = "cypress" />

describe("Verify the content of Icon Legend page", () => {

    it('Check the icon legends amount in corresponding groups', () => {

        cy.get('#side-panel #tasks>.task:nth-child(3)').click();
        cy.get('.jenkins-icon-size #rss-bar>a:nth-child(1)').click();

        cy.get("div[id='main-panel'] h1")
            .should('have.text', 'Icon legend');
        cy.get("body > div:nth-child(7) > div:nth-child(2) > h2:nth-child(3)")
            .should('have.text', 'Status');
        cy.get("body > div:nth-child(7) > div:nth-child(2) > h2:nth-child(5)")
            .should('have.text', 'Project Health');

        cy.get("#main-panel>.app-icon-legend:nth-child(4) dt")
            .should('have.length', 12);
        cy.get("#main-panel>.app-icon-legend:nth-child(6) dt")
            .should('have.length', 5);
    })
})

