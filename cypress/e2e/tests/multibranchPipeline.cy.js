/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import resultSearchBox from "../../fixtures/pom_fixtures/resultSearchBox.json";
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";

describe('multibranchPipeline', () => {

    const homePage = new HomePage();
    const dashbord = new DashboardBreadcrumbs();

    it.skip('AT_16.03.001 | Delete the Multibranch Pipeline using dropdown menu', function () {
        homePage
            .clickCreateJobLink()
            .typeNewItemNameInputField(newItemData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickSaveBtnAndGoMultiPipeline()
            .clickJenkinsHeadIcon()
            .hoverProjectNameLink()
            .clickProjectDrpDwnBtn()
            .clickDeleteMultiBrPipelineFromDrpDwnMenu()
            .clickSubmitBtn()
            .typeIntoSearchBox(newItemData.multibranchPipelineName)
            .getResultNoMatch().should('have.text', resultSearchBox.resultSearchNoMatchMsg)  
        });

    it('delete Multibranch Pipeline using the dropdown menu', () => {
        cy.createMultiBranchPipeline(multibranchPipelineName)
        dashbord
            .clickDashboardLinkAndGoHomePage()
            .hoverAndClickProjectDrpDwnBtn()
            .clickDeleteMultiBrPipelineFromDrpDwnMenu()
            .clickYesBtn()
            .should('not.contain.text', multibranchPipelineName)
        });
    });
    