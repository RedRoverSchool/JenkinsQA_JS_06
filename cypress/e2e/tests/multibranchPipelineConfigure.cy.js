/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import multibranchPipelineConfigPageData from "../../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";
import multibranchPipelinePageData from "../../fixtures/pom_fixtures/multibranchPipelinePage.json";
import MultibranchPipelinePage from "../../pageObjects/MultibranchPipelinePage";
import MultibranchPipelineConfigurePage from "../../pageObjects/MultibranchPipelineConfigurePage";
import multibranchPipline from "../../fixtures/multibranchPipeline.json";

describe('multibranchPipelineConfigure', () => {

    const homePage = new HomePage();
    const multibranchPipelineConfigurePage = new MultibranchPipelineConfigurePage();
    const multibranchPiplinePage = new MultibranchPipelinePage();

    it('AT_16.01_07 | Verify the "add metrics" are exist and visible', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.multibranchPipelineName)
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
            .typeNewItemNameInputField(newItemPageData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickSaveBtnAndGoMultiPipeline()
            .clickConfigureTheProjectLink()
            .clickAppearanceBtn()
            .selectIconDrpDwn(multibranchPipelineConfigPageData.iconDrpDwn[0])
            .clickSaveBtnAndGoMultiPipeline()
            .getMultibranchPipelineTitle().should('have.attr', 'title', multibranchPipelinePageData.iconTitle)
    });

    it('AT_16.01_03 | Disables the current Multibranch Pipeline', () => {
        cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName);

        multibranchPipelineConfigurePage
            .clickDisableBtn()
            .clickSaveBtnAndGoMultiPipeline()
            .trimMultibranchPiplineDisabledText()
            .should('contain', multibranchPipelinePageData.disabledMessage)

        multibranchPiplinePage
            .getMultibranchPiplineWarning()
            .should('have.css', 'color', multibranchPipelinePageData.disabledMessageColor)

        multibranchPiplinePage
            .getEnableButton()
            .should('contain', multibranchPipelinePageData.enableButton)
            .and('have.css', 'color', multibranchPipelinePageData.enableButtonColor)
    });

    it('AT_16.01_010 | Verify configuration fields -> Branch source ', function () {
        cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName);

        multibranchPipelineConfigurePage
            .hoverClickAddSource()
            .createAddSourceItemList()
            .should('deep.equal', multibranchPipelineConfigPageData.addSourceItemsList)
    });

    it('AT_16.01_017 | Multibranch Pipeline>Configuration>Scan Multibranch Pipeline Triggers>Verify array of time Interval', function () {
        cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName);

        multibranchPipelineConfigurePage
            .createIntervalDrDwnItemList()
            .should('deep.equal', multibranchPipelineConfigPageData.intervalTimeItemsList)
           })

    it('AT_16.01.008 Enables the current Multibranch Pipeline', () => {
        cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName)

         multibranchPipelineConfigurePage
            .clickDisableBtn()
            .clickSaveBtnAndGoMultiPipeline()
            .clickMultibranchPiplineEnableBtn()
            .getEnableButton()
            .should('contain', multibranchPipelinePageData.disableButton)
            .should('have.css', 'color', multibranchPipelinePageData.enableButtonColor)
     });

    it('AT_16.01_05 | Verify check boxes change color', () => {
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName)

        homePage
            .clickMultibranchPipelineProjectNameLink(newItemPageData.multibranchPipelineName)
            .clickConfigureTheProjectLink()
            .hoverScanTriggerCheckbox()
            .should('have.css', 'box-shadow')
    });

    it('AT_16.01_06 | Verify the number of checkboxes', () => {
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName)

        homePage
        .clickMultibranchPipelineProjectNameLink(newItemPageData.multibranchPipelineName)
        .clickConfigureTheProjectLink()
        .getCheckbox()
        .should('have.length', 4)
    })
});
