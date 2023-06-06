/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import FreestyleProjectPage from "../../pageObjects/FreestyleProjectPage";
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import freestyleProjectConfigure from "../../fixtures/pom_fixtures/freestyleProjectConfigure.json";
import GitHubPage from "../../pageObjects/GitHubPage";
import gitHubPageData from "../../fixtures/pom_fixtures/gitHubPage.json"

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const freestyleProjectPage = new FreestyleProjectPage();
    const dashbord = new DashboardBreadcrumbs();
    const gitHubPage = new GitHubPage();

    beforeEach('Create Freestyle project', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject();
    })

    it('AT_12.05_004 | Add link on GitHub and verify it', () => {    
        dashbord
            .clickDashboardLinkAndGoHomePage();
        homePage
            .hoverProjectNameLink()
            .clickProjectNameDropdown();
        homePage.getProjectNameDropdownList().should('be.visible');
        homePage.clickProjectNameDropdownConfigureLink()
            .checkGitHubProjectCheckbox()
            .typeProjectUrl(freestyleProjectConfigure.gitHubProjectURL)
            .clickSaveBntAndGoFreestyleProjectPage()
            .getGitHubSideMenuLink()
            .should('be.visible');
        freestyleProjectPage.clickGitHubSideMenuLink();

        cy.url().should('be.eq', freestyleProjectConfigure.gitHubProjectURL);
        gitHubPage
            .getGitHubHeaderAuthor()
            .should('include.text', gitHubPageData.gitHubHeaderAuthor);
    });

    freestyleProjectConfigure.postBuildActions.forEach((actionName, idx) => {
        it(`AT_12.05_008 | Verify user can choose ${actionName} from the dropdown menu list <Post-build Actions> while configuring the freestyle project`, () => {
            freestyleProjectPage
                .clickConfigureSideMenuLink()
                .clickLeftSideMenuPostBuldActionsBtn()
                .clickAddPostBuildActionBtn()
                .selectPostBuildActionDropDownMenuItem(idx)
                .checkPostBuildActionWindowHeaderName(actionName)
                .clickSaveBtnAndGoFreestyleProject()
                .clickConfigureSideMenuLink()
                .clickLeftSideMenuPostBuldActionsBtn()
                .getPostBuildActionWindow()
                .should('exist')
        })
    });

});