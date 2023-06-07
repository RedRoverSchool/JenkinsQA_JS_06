/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import multibranchPipelineConfigData from "../../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";
import multibranchPipelineData from "../../fixtures/pom_fixtures/multibranchPipelinePage.json";
import MultibranchPipelinePage from "../../pageObjects/MultibranchPipelinePage";
import MultibranchPipelineConfigurePage from "../../pageObjects/MultibranchPipelineConfigurePage";

describe('multibranchPipelineConfigure', () => {

    const homePage = new HomePage();
    const multibranchPipelineConfigurePage = new MultibranchPipelineConfigurePage();
    const multibranchPiplinePage = new MultibranchPipelinePage();

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
            .selectIconDrpDwn(multibranchPipelineConfigData.iconDrpDwn[0])
            .clickSaveBtnAndGoMultiPipeline()
            .getMultibranchPipelineTitle().should('have.attr', 'title', multibranchPipelineData.iconTitle)
    });

    it('AT_16.01_03 | Disables the current Multibranch Pipeline', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickDisableBtn()
            .clickSaveBtnAndGoMultiPipeline()
            .trimMultibranchPiplineDisabledText()
            .should('contain', multibranchPipelineData.disabledMessage)

        multibranchPiplinePage
            .getMultibranchPiplineWarning()
            .should('have.css', 'color', multibranchPipelineData.disabledMessageColor)

        multibranchPiplinePage
            .getEnableButton()
            .should('contain', multibranchPipelineData.enableButton)
            .and('have.css', 'color', multibranchPipelineData.enableButtonColor)
    });

    it('AT_16.01_010 | Verify configuration fields -> Branch source ', function () {
        cy.createMultiBranchPipeline(newItemData.multibranchPipelineName);

        multibranchPipelineConfigurePage
            .hoverClickAddSource()
            .createAddSourceItemList()
            .should('deep.equal', multibranchPipelineConfigData.addSourceItemsList)
    });

    it('AT_16.01_05 | Verify check boxes change color', () => {
        cy.createMultibranchPipelineProject(newItemData.multibranchPipelineName)
        homePage
            .clickMultibranchPipelineNameLink(newItemData.multibranchPipelineName)
            .clickConfigureTheProjectLink()
            .hoverScanTriggerCheckbox()
            .should('be.visible', 'box-shadow')
    });
});
