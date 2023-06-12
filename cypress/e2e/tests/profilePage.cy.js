/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userCredentialsPageData from "../../fixtures/pom_fixtures/userCredentialsPage.json";
import { sidePanelNameLink } from "../../fixtures/pom_fixtures/userConfigurePage.json"

describe('profilePage', () => {

    const headerAndFooter = new HeaderAndFooter();

    it("AT_18.06.001 | Profile Page | Verifying the Credentials link redirects to the user's credentials page", () => {

        headerAndFooter
            .clickUserNameLink()
            .clickUserCredentialsLink()
            .getCredentialsHeader()
            .should('have.text', userCredentialsPageData.credentialsPageHeader)
    })

    it("AT_18.04_001 | <Profile Page> | Link to User's configure | Configure is displayed on User's profile page", () => {

        headerAndFooter
            .clickUserNameLink()
            .getUserConfigureNameLink()
            .should("have.text", sidePanelNameLink)

    })

    it('AT_18.01_005| Verify access to user ID and status though user’s profile page', () => {
        headerAndFooter
            .clickUserNameLink()
            .verifyUserPagesUrl(Cypress.env('local.admin.username'))
            .verifyStatusBtn()
            .getUserId().should('contain', Cypress.env('local.admin.username'))
    })

    it('AT_18.06.002 | <Profile Page> Link to User`s credentials (by dropdown menu)', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .clickUserDropDownMenuCredentials()
            .checkUrlCredentialsPage(userCredentialsPageData.credentialsPageUrl)
            .getCredentialsHeader()
            .should('have.text', userCredentialsPageData.credentialsPageHeader)
    })
})
