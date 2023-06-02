/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";

describe('multibranchPipelineConfigure', () => {

    const homePage = new HomePage();
    
    it('AT_16.01_07 | Verify the "add metrics" are exist and visible', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.multibranchPipelineName)
            .clickMultibranchPipelineItem()
            .clickCreateMultibranchPipelineOkBtn()
            .clickMultibranchPipelineConfigSaveBtn()
            .clickConfigureTheProjectLink()
            .clickHealthMetricsBtn()
            .getAddMetricBtn()
            .should('be.visible');
    });
});
