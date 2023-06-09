/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import { textTitle } from "../../fixtures/pom_fixtures/buildHistoryPage.json";

describe('buildHistory', () => {

    const homePage = new HomePage();
    
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
});
