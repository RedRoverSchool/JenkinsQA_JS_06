/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import { textTitle, buildDescription} from "../../fixtures/pom_fixtures/buildHistoryPage.json"
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import BuildHistoryPage from "../../pageObjects/BuildHistoryPage"
import BuildPage from "../../pageObjects/BuildPage";

describe('buildHistory', () => {

    const homePage = new HomePage();
    const headerandFooter = new HeaderAndFooter();
    const buildHistoryPage = new BuildHistoryPage()
    const buildPage = new BuildPage();
    
    it('AT_07.01_005 | Build History > Verify user can see date and time of build creating in build history calendar', function() {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .clickScheduleBuildBtn()
            .then(() => {
                const timeBuildCreating = homePage.getTimeBuildCreating()

                homePage
                    .clickBuildHistoryLink()
                    .clickBuildInBuildHistoryCalendar()
                    .getTimeOfBuildCreatingFromCalendar()
                    .should('contain', timeBuildCreating)
            })
    });

    it('AT_07.01 _001| Build History|Build History link is clickable', () => {

        homePage
            .clickBuildHistoryLink()
            .getBuildHistoryPageTitle()
            .should('have.text', textTitle)
    })

    it('AT_07.03.002 | Verify Possibility to Delete Builds from Build Page', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);
        homePage
            .clickOnScheduleBuildBtn()
            .clickBuildHistoryLink()
            .clickBuildLink()
            .clickDeleteBuildBtn()
            .clickConfirmDeleteBtn()
        headerandFooter
            .clickJenkinsHomeLink()
            .clickBuildHistoryLink()
            .getBuildLink().should('not.exist');
    })

    it('07.02_005 | Build History > Verify builds can be sorted by project name in descending alphabetical order', () => {   
        cy.createPipeline(newItemPageData.pipelineName)
        cy.createFreestyleProject(newItemPageData.freestyleProjectName) 
        homePage
            .clickScheduleBuildForProjectNameBtn(newItemPageData.pipelineName)
            .clickScheduleBuildForProjectNameBtn(newItemPageData.freestyleProjectName)
            .clickBuildHistoryLink()
        buildHistoryPage
            .createProjectStatusTable()
            .then((tableArray) => {
                buildHistoryPage
                    .clickSortHeaderBuild()
                    buildHistoryPage
                        .createProjectStatusTable()
                        .then((actualSortedTableArray) => {
                            let expectedSortedTable = tableArray.sort((a,b) => b['Build'].localeCompare(a['Build']))
                            expect(actualSortedTableArray).to.deep.equal(expectedSortedTable)
                        })
                })       
    });

    it('AT_07.05_02 | Build History | Add Build Description - Verify user can see description text Preview.', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);
        homePage
            .clickOnScheduleBuildBtn()
        headerandFooter
            .clickJenkinsHomeLink()
            .clickBuildTableLink()
        buildPage
            .clickBuildDescriptionLink()
            .typeBuildDescriptionInput(buildDescription)
            .verifyPreviewTextareaNotVisible()
            .clickShowPreviewLink()
            .getPreviewTextarea()
            .should('be.visible')
            .and('have.text', buildDescription)
    });

    it("AT_07.05_001  Build History  Verify adding build description", () => {
      cy.createFreestyleProject(newItemPageData.freestyleProjectName);
      homePage
        .clickOnScheduleBuildBtn()
        .clickBuildHistoryLink()
        .clickBuildLink();
      buildPage
        .clickBuildDescriptionLink()
        .typeBuildDescriptionInput(buildDescription)
        .clickSaveDescriptionBtn()
        .getDescriptionText()
        .should("have.text", buildDescription);
    });
});
