/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import { textTitle } from "../../fixtures/pom_fixtures/buildHistoryPage.json"
import BuildHistoryPage from "../../pageObjects/BuildHistoryPage"

describe('buildHistory', () => {

    const homePage = new HomePage();
    const buildHistoryPage = new BuildHistoryPage()
    
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

});
