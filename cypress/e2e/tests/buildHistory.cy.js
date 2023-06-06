/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import HomePage from "../../pageObjects/HomePage";
import {freestyleProjectNewName} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"

describe('buildHistory', () => {

    const headerAndFooter = new HeaderAndFooter();
    const homePage = new HomePage();
    
    it('AT_07.01_005 | Build History > Verify user can see date and time of build creating in build history calendar', function() {
        cy.createFreestyleProject(freestyleProjectNewName);

        headerAndFooter
            .clickJenkinsHomeLink()
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
 
});
