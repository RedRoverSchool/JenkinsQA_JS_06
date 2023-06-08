/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectConfigData from "../../fixtures/pom_fixtures/freestyleProjectConfigure.json";
import gitHubPageData from "../../fixtures/pom_fixtures/gitHubPage.json"

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
   
    beforeEach('Create Freestyle project', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);
    })   

    it('AT_12.05_004 | Add link on GitHub and verify it', () => {    
        homePage
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
        homePage
            .clickFreestyleProjectNameLink()         
            .clickConfigureSideMenuLink()  
            .typeDescriptionInputField(freestyleProjectConfigData.description)
            .clickSaveBtnAndGoFreestyleProject()        
            .getFreestyleProjectDescription()
            .should('contain.text', freestyleProjectConfigData.description);
    })

    freestyleProjectConfigData.postBuildActions.forEach((actionName, idx) => {
        it(`AT_12.05_008 | Verify user can choose ${actionName} from the dropdown menu list <Post-build Actions> while configuring the freestyle project`, () => {
            homePage
                .clickFreestyleProjectNameLink()
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
            homePage
                .clickFreestyleProjectNameLink()
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
