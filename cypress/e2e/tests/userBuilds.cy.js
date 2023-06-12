/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userBuildsPageData from "../../fixtures/pom_fixtures/userBuildsPage.json";
import freestyleProjectPage from "../../fixtures/pom_fixtures/freestyleProjectPage";
import HomePage from "../../pageObjects/HomePage";

describe('userBuilds', () => {
    const headerAndFooter = new HeaderAndFooter();
    const homePage = new HomePage();

    it('AT_04.06.008 | Breadcrumbs Verify user can see his username in the title', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserBuildsMenu()
            .getUserBuildsTitle()
            .should('eq', `${Cypress.env('local.admin.username')} ${userBuildsPageData.titleText}`);
    });

    userBuildsPageData.tableSize.forEach((size) => {
        it(`AT_04.06.002 Verify clicking on ${size.size} icon will change the icon size`, function() {
            cy.createFreestyleProject(freestyleProjectPage.freestyleProjectNewName)
            homePage
                .clickOnScheduleBuildBtn()
            headerAndFooter
                .clickUserDropDownBtn()
                .selectUserBuildsMenu()
                .clickUserBuildsTableSizeBtns(size.size)
                .getStatusIcon().should('have.css', 'height', size.heigth)
        });
    });
})
