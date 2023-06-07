/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import resultSearchBox from "../../fixtures/pom_fixtures/resultSearchBox.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import multibranchPipelineConfirmRenamePage from "../../fixtures/pom_fixtures/multibranchPipelineConfirmRenamePage.json";

describe('multibranchPipeline', () => {

    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();


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

    it('AT_16.02.006 | Verify user can rename Multibranch Pipeline inside the selected Multibranch Pipeline', () => {
        cy.createMultiBranchPipeline(newItemData.multibranchPipelineName);

        headerAndFooter
            .clickJenkinsHomeLink()
            .clickMultibranchPipelineNameLink(newItemData.multibranchPipelineName)
            .clickMultibranchPipeRenameSideMenuLink()
            .clickMultibranchPipelineRenameBtn()
            .getErrorMessage()
            .should('have.text', multibranchPipelineConfirmRenamePage.errorMessage);
    });
    });
    