/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import userProfilePageData from "../../fixtures/pom_fixtures/userProfilePage.json";

describe("userProfile", () => {
  const homePage = new HomePage();

  it("AT_06.02.004 verify the description can be added to a created user", () => {
    cy.createUser(
      userProfilePageData.user.name,
      userProfilePageData.user.password,
      userProfilePageData.user.confirmPassword,
      userProfilePageData.user.emailAddress
    );

    homePage
      .clickPeopleSideMenuLink()
      .clickCreatedUserNameLink(userProfilePageData.user.name)
      .checkUserDescriptionTextNotExists()
      .clickUserDescriptionBtn()
      .typeUserDescriptionInputField(userProfilePageData.user.description)
      .clickUserDescriptionSaveBtn()
      .getUserDescriptionText()
      .should("have.text", userProfilePageData.user.description);
  });

  it.only('AT_06.02_003 | People> Verify save button functionality', () => {
    homePage
      .clickPeopleSideMenuLink()
      .clickUserNameLink()
      .clickUserDescriptionBtn()
      .typeUserDescriptionInputField(userProfilePageData.description)
      .clickUserDescriptionSaveBtn()
    homePage
      .clickPeopleSideMenuLink()
      .clickUserNameLink()
      .getUserDescriptionText()
      .should('have.text', userProfilePageData.description)
  })
});
