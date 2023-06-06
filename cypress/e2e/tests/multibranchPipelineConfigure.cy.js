/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import multibranchPipelineConfigPage from "../../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";
import multibranchPipelinePage from "../../fixtures/pom_fixtures/multibranchPipelinePage.json";
import MultibranchPipelineConfigurePage from "../../pageObjects/MultibranchPipelineConfigurePage";

describe('multibranchPipelineConfigure', () => {

    const homePage = new HomePage();
    const multibranchPipelineConfigurePage = new MultibranchPipelineConfigurePage();

    it('AT_16.01_07 | Verify the "add metrics" are exist and visible', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickSaveBtnAndGoMultiPipeline()
            .clickConfigureTheProjectLink()
            .clickHealthMetricsBtn()
            .getAddMetricBtn()
            .should('be.visible');
    });

    it('AT_16.01.004 | Verify Change Appearance', function () {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickSaveBtnAndGoMultiPipeline()
            .clickConfigureTheProjectLink()
            .clickAppearanceBtn()
            .selectIconDrpDwn(multibranchPipelineConfigPage.iconDrpDwn[0])
            .clickSaveBtnAndGoMultiPipeline()
            .getMultibranchPipelineTitle().should('have.attr', 'title', multibranchPipelinePage.iconTitle)
    });

    it('AT_16.01_010 | Verify configuration fields -> Branch source ', function () {
        cy.createMultiBranchPipeline(newItemData.multibranchPipelineName);

        multibranchPipelineConfigurePage
            .hoverClickAddSource()
            .createAddSourceItemList()
            .should('deep.equal', multibranchPipelineConfigPage.addSourceItemsList)
    });
});
