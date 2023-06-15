/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import FreestyleProjectPage from "../../pageObjects/FreestyleProjectPage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import UserConfigurePage from "../../pageObjects/UserConfigurePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectConfigData from "../../fixtures/pom_fixtures/freestyleProjectConfigure.json";
import gitHubPageData from "../../fixtures/pom_fixtures/gitHubPage.json"
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import buildPageData from "../../fixtures/pom_fixtures/buildPage.json";

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();
    const projectPage = new FreestyleProjectPage();
    const projectConfigPage = new FreestyleProjectConfigurePage();
    const userConfigPage = new UserConfigurePage();

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
        projectConfigPage
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
            .getNotificationMessageText().should('equal', data.applyConfirmMessage);

        cy.openHomePage();
        cy.openFreestyleProjectConfigurePage();

        projectConfigPage.getProjectEnabled().should("have.attr", "value", "true");
        projectConfigPage.getDescriptionInputField().should("have.text", data.description);
        projectConfigPage.getDiscardOldBuildsCheck().should("be.checked");
        projectConfigPage.getStrategy().should("have.text", data.strategyOption);
        projectConfigPage.getMaxNumberOfBuildsToKeepInputField().should("have.attr", "value", data.maxBuilds.toString());
        projectConfigPage.getSourceCodeNoneRadioBtn().should("have.text", data.sourceCodeManagement);
        projectConfigPage.getBuildTriggersCheck().should("be.checked");
        projectConfigPage.getScheduleInputField().should("have.text", data.schedule);
        projectConfigPage.getAddTimestampsCheck().should("be.checked");
        projectConfigPage.getBuildStepName().should("contain.text", data.scriptOption);
        projectConfigPage.getScriptText().should("have.text", data.scriptText);
    });

    it('AT_12.05_007| Freestyle project > Configure > User can build the scheduled project manually', function () {
        const data = freestyleProjectConfigData.buildPeriodicallyProject;

        cy.openFreestyleProjectConfigurePage();
        projectConfigPage.setConfigurationsForScheduledFreestyleProject(
            data.description1,
            data.maxBuilds,
            data.schedule1,
            data.buildEnvironmentOption,
            data.scriptOption,
            data.scriptText
        )

        cy.openHomePage();
        headerAndFooter
            .getCurrentUserName().should("be.visible").and("not.be.empty")
            .then(($userName) => {
                cy.wrap($userName.text()).as('currentUserName');
            })
        homePage
            .clickFreestyleProjectNameLink()
            .clickBuildNowSideMenuLink(newItemPageData.freestyleProjectName);
        cy.reload()
            .then(() => {
                projectPage.getBuildsRows().should("have.length", 1, {timeout: 10000});
                projectPage
                    .clickLastBuildLink()
                    .getBuildStartedByText()
                    .should("equal", `${buildPageData.startedByUser}${this.currentUserName}`);
            });
    })

    it('AT_12.05_011 | FreestyleProjectConfigure > API > Trigger job remotely by API call', function () {
        const data = freestyleProjectConfigData.scriptedProject;
        const name = newItemPageData.freestyleProjectName;
        const admin = Cypress.env('local.admin.username');
        const port = Cypress.env('local.port');

        cy.openFreestyleProjectConfigurePage();
        projectConfigPage
            .setConfigurationsForScriptedFreestyleProject(
                data.description, data.buildEnvironmentOption, data.scriptOption, data.scriptText
            )
        cy.openHomePage();
        homePage.clickFreestyleProjectNameLink();
        projectPage.getBuildsRows().should("have.length", 0);
        projectPage.getNoBuildsSidePanelStatusText().should("equal", freestyleProjectPageData.statusText);
        projectPage.getPermalinksLinks().should("be.empty");

        cy.generateAPIToken(name);
        userConfigPage.getNewTokenValueText()
            .then($t => {
                cy.wrap($t.text()).as('token');
            })
            .then(() => {
                cy.request({
                    method: 'POST',
                    url: `http://${admin}:${this.token}@localhost:${port}/job/${name}/build?delay=0sec`
                }).should(($response) => {
                    expect($response.status).to.eq(201);
                })
            })

        cy.openHomePage();
        homePage
            .clickFreestyleProjectNameLink()
        projectPage.getBuildsRows().should("have.length", 1);
        projectPage.getPermalinksLinks().should("not.be.empty");
        projectPage
            .clickLastBuildLink()
            .getBuildNameText()
            .should("equal", `${buildPageData.buildName}`);
    })
})
