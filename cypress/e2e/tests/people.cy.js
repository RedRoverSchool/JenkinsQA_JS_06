/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import userProfilePageData from "../../fixtures/pom_fixtures/userProfilePage.json";
import peoplePageData from "../../fixtures/pom_fixtures/peoplePage.json"

describe('people', () => {

    const homePage = new HomePage();
    
    it('AT_06.04_005 | Edit User description', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfilePageData.description)
            .clickUserDescriptionSaveBtn()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfilePageData.editDescription)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.editDescription);
    });

    it('AT_06.02.009 | Verify Possibility to Add Description to a User', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfilePageData.description)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.description);
    });

    it('AT_06.01_002 | Verify People page tab is redirecting to right page', () => {
        homePage
            .clickPeopleSideMenuLink()
            .trimPeoplePageHeader()
            .should('eq', peoplePageData.peoplePageHeader)
    });
});
