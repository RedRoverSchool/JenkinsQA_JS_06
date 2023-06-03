/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import userProfileData from "../../fixtures/pom_fixtures/userProfilePage.json";

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
}) 
