/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import buildHistoryPageData from "../../fixtures/pom_fixtures/buildHistoryPage.json"

describe('buildHistory', () => {

    const homePage = new HomePage();
    
    it('AT_07.01_005 | Build History > Verify user can see date and time of build creating in build history calendar', function() {
        cy.createFreestyleProject(newItemData.freestyleProjectName);

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
        })

    it('AT_02.04.006 | Verify that link "Build History" is clickable', () => {
        homePage
            .clickBuildHistoryLink()
            .getBuildHistoryPageUrl()
            .should('include', buildHistoryPageData.buildHistoryUrl)
    }) 
});
