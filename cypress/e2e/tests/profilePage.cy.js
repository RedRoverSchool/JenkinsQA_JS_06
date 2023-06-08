/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userCredentialsPageData from "../../fixtures/pom_fixtures/userCredentialsPage.json"


describe('profilePage', () => {

    const headerAndFooter = new HeaderAndFooter();

    it("AT_18.06.001 | Profile Page | Verifying the Credentials link redirects to the user's credentials page", () => {

        headerAndFooter
            .clickUserNameLink()
            .clickUserCredentialsLink()
            .getCredentialsHeader()
            .should('have.text', userCredentialsPageData.credentialsPageHeader)
    })
})
