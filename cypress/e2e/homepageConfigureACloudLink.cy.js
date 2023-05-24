/// <reference types="cypress"/>

import homepageMainPanelLinkData from "../fixtures/homepageMainPanelLinkData.json";

describe("homepageConfigureACloudLink", () => {
  it('AT_02.07.006 | <Main Panel> Verify the "Configure a cloud" link in the "Set up a distributed build" section', function () {
    cy.get('.content-block a[href="configureClouds"]')
      .should("be.visible")
      .and("have.text", homepageMainPanelLinkData.linkName)
      .click();
    cy.url().should("include", homepageMainPanelLinkData.linkEndPoint);
    cy.get(".jenkins-app-bar__content > h1").should(
      "have.text",
      homepageMainPanelLinkData.newPageHeading
    );
  });
});
