/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import userProfileData from "../../fixtures/pom_fixtures/userProfilePage.json";
import peoplePage from "../../fixtures/pom_fixtures/peoplePage.json"

describe('people', () => {

    const homePage = new HomePage();
    
    it('AT_06.04_005 | Edit User description', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfileData.description)
            .clickUserDescriptionSaveBtn()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfileData.editDescription)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfileData.editDescription);
    });

    it('AT_06.02.009 | Verify Possibility to Add Description to a User', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfileData.description)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfileData.description);
    });

    it('AT_06.01_002 | Verify People page tab is redirecting to right page', () => {
        homePage
            .clickPeopleSideMenuLink()
            .trimPeoplePageHeader()
            .should('eq', peoplePage.peoplePageHeader)
    });

    it('AT_06.02_001| Verify description is added to a user', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfileData.description)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should("have.text", userProfileData.description)
    });
});
