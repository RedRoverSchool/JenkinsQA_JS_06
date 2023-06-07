/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import resultSearchBoxData from "../../fixtures/pom_fixtures/resultSearchBox.json";

describe('multibranchPipeline', () => {

    const homePage = new HomePage();

    it.skip('AT_16.03.001 | Delete the Multibranch Pipeline using dropdown menu', function () {
        homePage
            .clickCreateJobLink()
            .typeNewItemNameInputField(newItemPageData.multibranchPipelineName)
            .selectMultibranchPipelineItem()
            .clickOkBtnAndGoMultiPipelineConfig()
            .clickSaveBtnAndGoMultiPipeline()
            .clickJenkinsHeadIcon()
            .hoverProjectNameLink()
            .clickProjectDrpDwnBtn()
            .clickDeleteMultiBrPipelineFromDrpDwnMenu()
            .clickSubmitBtn()
            .typeIntoSearchBox(newItemPageData.multibranchPipelineName)
            .getResultNoMatch().should('have.text', resultSearchBoxData.resultSearchNoMatchMsg)  
        });
    });
    