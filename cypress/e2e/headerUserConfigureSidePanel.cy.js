/// <reference types="cypress"/>

import userConfigure from "../fixtures/userConfigure.json"

describe("Header User Configure", () => {
    it.only('AT_01.05_006 | User should see all available "tasks" in a side panel', function () {
        cy.get('.login .model-link').should('be.visible');
        cy.get('#page-header .login a.model-link button.jenkins-menu-dropdown-chevron').click({ force: true });
        cy.get('#breadcrumb-menu li.yuimenuitem a span').contains('Configure').click();
        cy.get('#tasks > div:nth-child(1) span:nth-child(2)').should('have.text', userConfigure.SidePanelTasks.Names[0])
        cy.get('#tasks > div:nth-child(2) span:nth-child(2)').should('have.text', userConfigure.SidePanelTasks.Names[1])
        cy.get('#tasks > div:nth-child(3) span:nth-child(2)').should('have.text', userConfigure.SidePanelTasks.Names[2])
        cy.get('#tasks > div:nth-child(4) span:nth-child(2)').should('have.text', userConfigure.SidePanelTasks.Names[3])
        cy.get('#tasks > div:nth-child(5) span:nth-child(2)').should('have.text', userConfigure.SidePanelTasks.Names[4])
        cy.get('#tasks > div:nth-child(6) span:nth-child(2)').should('have.text', userConfigure.SidePanelTasks.Names[5])
    })
})