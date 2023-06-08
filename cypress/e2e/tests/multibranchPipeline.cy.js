/// <reference types="cypress" />

import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import multibranchPipelineConfirmRenamePageData from "../../fixtures/pom_fixtures/multibranchPipelineConfirmRenamePage.json";

describe('multibranchPipeline', () => {

    const headerAndFooter = new HeaderAndFooter();


    it('AT_16.03.001 | Delete the Multibranch Pipeline using dropdown menu', function () {
        cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName);

        headerAndFooter
            .clickJenkinsHomeLink()
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.multibranchPipelineName)
            .clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu(newItemPageData.multibranchPipelineName)
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
        });

    it('AT_16.02.006 | Verify user can rename Multibranch Pipeline inside the selected Multibranch Pipeline', () => {
        cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName);

        headerAndFooter
            .clickJenkinsHomeLink()
            .clickMultibranchPipelineNameLink(newItemPageData.multibranchPipelineName)
            .clickMultibranchPipeRenameSideMenuLink()
            .clickMultibranchPipelineRenameBtn()
            .getErrorMessage()
            .should('have.text', multibranchPipelineConfirmRenamePageData.errorMessage);
    });
});
    