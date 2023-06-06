/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import freestyleProjectConfigure from "../../fixtures/pom_fixtures/freestyleProjectConfigure.json";
import gitHubPageData from "../../fixtures/pom_fixtures/gitHubPage.json";

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const dashbord = new DashboardBreadcrumbs();

    beforeEach('Create Freestyle project', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject();
        dashbord
            .clickDashboardLinkAndGoHomePage();
    })

    it('AT_12.05_004 | Add link on GitHub and verify it', () => {    
        
        homePage
            .clickProjectDrpDwnBtn(newItemPage.freestyleProjectName)
            .clickProjectNameDropdownConfigureLink()
            .checkGitHubProjectCheckbox()
            .typeProjectUrl(freestyleProjectConfigure.gitHubProjectURL)
            .clickSaveBntAndGoFreestyleProjectPage()
            .clickGitHubSideMenuLink()
            .checkUrl() 
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