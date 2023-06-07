/// <reference types="cypress" />
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userBuildsPage from "../../fixtures/pom_fixtures/userBuildsPage.json";

describe('userBuilds', () => {
    const headerAndFooter = new HeaderAndFooter();

    it('AT_04.06.008 | Breadcrumbs Verify user can see his username in the title', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserBuildsMenu()
            .getUserBuildsTitle()
            .should('eq', `${Cypress.env('local.admin.username')} ${userBuildsPage.titleText}`);
    });
})