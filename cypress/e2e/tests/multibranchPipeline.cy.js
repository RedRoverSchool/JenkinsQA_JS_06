/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import resultSearchBox from "../../fixtures/pom_fixtures/resultSearchBox.json";

describe('multibranchPipeline', () => {

    const homePage = new HomePage();

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
    });
    