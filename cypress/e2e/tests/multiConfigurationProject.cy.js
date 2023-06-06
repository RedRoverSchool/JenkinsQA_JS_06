/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import jobConfigurePageData from "../../fixtures/pom_fixtures/jobConfigurePage.json";

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();
    beforeEach(() => {
        homePage
            .clickCreateJobLink()
            .selectMultiConfigurationProjectItem()
            .typeNewItemNameInputField(jobConfigurePageData.name)
            .clickOkBtnAndGoMultiConfProjectConfig()
            .clickSaveButton();
    })

    it("AT_14.07_001|Verify Multi-configuration project deleted within itself", () => {
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickMultiConfigProjectNameLink(jobConfigurePageData.name)
            .clickDeleteSideMenuLink()
            .getPageBody()
            .should("not.have.text", jobConfigurePageData.name);
    });

    it('AT_14.07_002 | Delete Multi-configuration project on Dashboard with dropdown menu', () => {
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickProjectDrpDwnBtn()
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getPageBody()
            .should("not.have.text", jobConfigurePageData.name);
    });
});
