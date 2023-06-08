/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import FreestyleProjectPage from "../../pageObjects/FreestyleProjectPage";
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import freestyleProjectConfigData from "../../fixtures/pom_fixtures/freestyleProjectConfigure.json";
import gitHubPageData from "../../fixtures/pom_fixtures/gitHubPage.json"

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const freestyleProjectPage = new FreestyleProjectPage();
    const dashbord = new DashboardBreadcrumbs();
   
    beforeEach('Create Freestyle project', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject();
    })   

    it('AT_12.05_004 | Add link on GitHub and verify it', () => {    
        dashbord
            .clickDashboardLinkAndGoHomePage()   
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.freestyleProjectName)
            .clickProjectNameDropdownConfigureLink()
            .checkGitHubProjectCheckbox()
            .typeProjectUrl(freestyleProjectConfigData.gitHubProjectURL)
            .clickSaveBntAndGoFreestyleProjectPage()
            .clickGitHubSideMenuLink()
            .checkUrl() 
            .getGitHubHeaderAuthor()
            .should('include.text', gitHubPageData.gitHubHeaderAuthor); 
    });

    it('AT_12.05_001 | Freestyle project > Add description to Freestyle project through Congure in side menu', () => {
        freestyleProjectPage            
            .clickConfigureSideMenuLink()  
            .typeDescriptionInputField(freestyleProjectConfigData.description)
            .clickSaveBtnAndGoFreestyleProject()        
            .getFreestyleProjectDescription()
            .should('contain.text', freestyleProjectConfigData.description);
    })

    freestyleProjectConfigData.postBuildActions.forEach((actionName, idx) => {
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

    freestyleProjectConfigData.buildSteps.forEach((buildStep, idx) => {
        it(`AT_12.05_005 | Verify user can choose ${buildStep} from the dropdown menu list <Add build step> while configuring the freestyle project`, () => {
            freestyleProjectPage
                .clickConfigureSideMenuLink()
                .clickLeftSidePanelBuildStepsBtn()
                .clickAddBuildStepBtn()
                .selectBuildStepFromMenuListItem(idx)
                .checkBuilderWindowHeaderName(buildStep)
                .clickSaveBtnAndGoFreestyleProject()
                .clickConfigureSideMenuLink()
                .clickLeftSidePanelBuildStepsBtn()
                .getBuilderWindow()
                .should('be.visible')
        })
    });
});
