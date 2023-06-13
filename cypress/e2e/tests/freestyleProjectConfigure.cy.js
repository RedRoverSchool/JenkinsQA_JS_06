/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectConfigData from "../../fixtures/pom_fixtures/freestyleProjectConfigure.json";
import gitHubPageData from "../../fixtures/pom_fixtures/gitHubPage.json"

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const configPage = new FreestyleProjectConfigurePage();

    beforeEach('Create Freestyle project', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);
    })

    it('AT_12.05_004 | Add link on GitHub and verify it', () => {
        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.freestyleProjectName)
            .clickProjectNameDropdownConfigureLink()
            .checkGitHubProjectCheckbox()
            .typeProjectUrl(freestyleProjectConfigData.gitHubProjectURL)
            .clickSaveBtnAndGoFreestyleProjectPage()
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

    freestyleProjectConfigData.AdvancedBtnCheckboxList.forEach((el, idx) => {
        it(`AT_12.05_009 | Verify that ${el} checkbox below Advanced button is visible and can be checked`, () => {
            homePage
                .hoverAndClickProjectDrpDwnBtn(newItemPageData.freestyleProjectName)
                .clickProjectNameDropdownConfigureLink()
                .clickAdvancedBtn()
                .checkAdvancedBtnChbox(idx)
                .clickSaveBtnAndGoFreestyleProjectPage()
                .clickConfigureSideMenuLink()
                .clickAdvancedBtn()
                .getAdvancedBtnChboxList(idx)
                .should('be.visible')
                .and('be.checked');
        })
    })

    it('AT_12.05_002 | Freestyle project > Configure > Apply configurations changes', () => {
        const data = freestyleProjectConfigData.buildPeriodicallyProject;

        cy.openFreestyleProjectConfigurePage();
        configPage
            .typeDescriptionInputField(data.description)
            .clickDiscardOldBuildsLabel()
            .typeMaxNumberOfBuildsToKeepInputField(data.maxBuilds)
            .clickBuildTriggersOptionLabel()
            .typeScheduleInputField(data.schedule)
            .selectBuildEnvironmentOption(data.buildEnvironmentOption)
            .clickAddBuildStepBtn()
            .selectScriptOption(data.scriptOption)
            .typeScriptCodeInputField(data.scriptText)
            .clickApplyBtn()
            .retrieveNotificationMessageText().should('equal', data.applyConfirmMessage);

        cy.openHomePage();
        cy.openFreestyleProjectConfigurePage()
            .then(() => {
                configPage.getProjectEnabled().should("have.attr", "value", "true");
                configPage.getDescriptionInputField().should("have.text", data.description);
                configPage.getDiscardOldBuildsCheck().should("be.checked");
                configPage.getStrategy().should("have.text", data.strategyOption);
                configPage.getMaxNumberOfBuildsToKeepInputField().should("have.attr", "value", data.maxBuilds.toString());
                configPage.getSourceCodeNoneRadioBtn().should("have.text", data.sourceCodeManagement);
                configPage.getBuildTriggersCheck().should("be.checked");
                configPage.getScheduleInputField().should("have.text", data.schedule);
                configPage.getAddTimestampsCheck().should("be.checked");
                configPage.getBuildStepName().should("contain.text", data.scriptOption);
                configPage.getScriptText().should("have.text", data.scriptText);
            });
    });
});
