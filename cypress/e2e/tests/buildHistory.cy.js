/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import { textTitle } from "../../fixtures/pom_fixtures/buildHistoryPage.json"
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe('buildHistory', () => {

    const homePage = new HomePage();
    const headerandFooter = new HeaderAndFooter();
    
    it.skip('AT_07.01_005 | Build History > Verify user can see date and time of build creating in build history calendar', function() {
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
});
