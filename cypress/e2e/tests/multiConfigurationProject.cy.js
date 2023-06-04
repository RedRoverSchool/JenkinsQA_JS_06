/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import { name } from "../../fixtures/pom_fixtures/jobConfigurePage.json";

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        homePage
            .clickCreateJobLink()
            .selectMultiConfigurationProjectItem()
            .typeNewItemNameInputField(name)
            .clickOkBtnAndGoMultiConfProjectConfig()
            .clickSaveButton();

        headerAndFooter
            .clickJenkinsHomeLink()
            .clickMultiConfigProjectNameLink(name)
            .clickDeleteSideMenuLink()
            .getPageBody()
            .should("not.have.text", name);
    });
});
