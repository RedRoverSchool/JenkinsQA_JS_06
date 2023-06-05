/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import multibranchPipelineConfigPage from "../../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";
import multibranchPipelinePage from "../../fixtures/pom_fixtures/multibranchPipelinePage.json";

describe('multibranchPipelineConfigure', () => {

    const homePage = new HomePage();
    
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

    it('AT_16.01_03 | Disables the current Multibranch Pipeline', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickDisableBtn()
            .clickSaveBtnAndGoMultiPipeline()
            .trimMultibranchPiplineDisabledText()
            .should('be.eq',multibranchPipelinePage.disabledMessage)
            .should('have.css','color',multibranchPipelinePage.disabledMessageColor)
            // .readMultibranchPiplineEnbleButtonText()
            // .should('contains.text', multibranchPipelinePage.enableButton)
            // .should('have.css','color',multibranchPipelinePage.enableButtonColor)

           
    });
});
