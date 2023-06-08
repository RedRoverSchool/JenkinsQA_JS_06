/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import HomePage from "../../pageObjects/HomePage";
import FolderPage from "../../pageObjects/FolderPage";

import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import multibranchPipelineConfirmRenamePageData from "../../fixtures/pom_fixtures/multibranchPipelineConfirmRenamePage.json";

describe('multibranchPipeline', () => {

    const headerAndFooter = new HeaderAndFooter();
    const homePage = new HomePage();
    const folderPage = new FolderPage();


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

    it('AT_16.04 _001| Verify that the Multibranch Pipeline is moved to an existing folder using dropdown', function () {
        cy.createFolderProject(newItemPageData.folderName);
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);

        homePage
            .hoverAndClickProjectDrpDwn(newItemPageData.multibranchPipelineName)
            .clickProjectNameDropdownMoveLink()
            .selectDestinationMoveJob(newItemPageData.folderName)
            .clickMoveButton()
            .clickGoToDashboard()
            .clickProjectName(newItemPageData.folderName)            
            .getIconProject()
            .should('have.attr', 'title', newItemPageData.newItemNames[4])
        folderPage
           .getJobInsideFolderLink()
           .should('have.text', newItemPageData.multibranchPipelineName)
    });

});
    