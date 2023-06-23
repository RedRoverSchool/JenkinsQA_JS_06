/// <reference types="cypress" />

import pipelinePageData from "../../fixtures/pom_fixtures/pipelinePage.json";
import HomePage from "../../pageObjects/HomePage";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json";

describe('dashboard', () => {

    const homePage = new HomePage()

    it("AT_20.04.001 | <Dashboard> Jenkins Table:: Pipeline's dropdown menu", () => {
        cy.createPipeline(pipelinePageData.pipelineName);
        homePage
            .hoverAndClickProjectDrpDwn(pipelinePageData.pipelineName)
            .verifyPipeLineDrpDwnMenu()
            .should('deep.equal', pipelinePageData.pipelineDropdownItems)
    })

    it('AT20.01.007.1|DashbordVerify size of project table S', () => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnS()
        .verifyTableSizeS()
    })

    it('AT20.01.007.2|DashbordVerify size of project table M',() => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnM()
        .verifyTableSizeM()
    })

    it('AT20.01.007.3|DashbordVerify size of project table L',() => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnL()
        .verifyTableSizeL()
    })
})

