/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import { name } from "../../fixtures/pom_fixtures/jobConfigurePage.json";

describe("jobConfigure", () => {
  const homePage = new HomePage();
  const headerAndFooter = new HeaderAndFooter();

  it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
    homePage
      .clickCreateJobLink()
      .clickMultiConfigurationProjectBtn()
      .typeItemNameInputField(name)
      .clickOkButton()
      .clickSaveButton();

    headerAndFooter
      .clickJenkinsHomeLink()
      .clickJobNameLink()
      .clickDeleteLink()
      .getPagesBody()
      .should("not.have.text", name);
  });
});
