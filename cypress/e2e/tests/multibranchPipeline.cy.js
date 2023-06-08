/// <reference types="cypress" />

import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import multibranchPipelineConfirmRenamePage from "../../fixtures/pom_fixtures/multibranchPipelineConfirmRenamePage.json";

describe('multibranchPipeline', () => {

    const headerAndFooter = new HeaderAndFooter();


    it('AT_16.03.001 | Delete the Multibranch Pipeline using dropdown menu', function () {
        cy.createMultiBranchPipeline(newItemData.multibranchPipelineName);

        headerAndFooter
            .clickJenkinsHomeLink()
            .clickProjectNameDropdown()
            .clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu(newItemData.multibranchPipelineName)
            .clickSubmitBtn()
            .getProjectTable()
            .should('not.exist');
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
    