/// <reference types="cypress" />


import pipelinePageData from "../../fixtures/pom_fixtures/pipelinePage.json";
import HomePage from "../../pageObjects/HomePage";

const homePage = new HomePage()

describe('dashboard', () => {
    const homePage = new HomePage()
    it("AT_20.04.001 | <Dashboard> Jenkins Table:: Pipeline's dropdown menu", () => {
        cy.createPipeline(pipelinePageData.pipelineName);
        homePage
            .clickPipelineNameDrpDwnBtn(pipelinePageData.pipelineName)
            .verifyPipeLineDrpDwnMenu()
            .should('deep.equal', pipelinePageData.pipelineDropdownItems)

    })
})

