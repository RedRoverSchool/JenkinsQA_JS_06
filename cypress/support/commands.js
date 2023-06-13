// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HeaderAndFooter from "../pageObjects/HeaderAndFooter";
import DashboardBreadcrumbs from "../pageObjects/DashboardBreadcrumbs";
import HomePage from "../pageObjects/HomePage";
import UserProfilePage from "../pageObjects/UserProfilePage";
import { homePageHeader } from "../fixtures/pom_fixtures/homePage.json";
import { configurePageHeader } from "../fixtures/pom_fixtures/freestyleProjectConfigure.json";

const userProfilePage = new UserProfilePage();

Cypress.Commands.add('clearUserStatusDescription', () => {
    headerAndFooter
        .clickUserNameLink();

    userProfilePage
        .clickUserDescriptionBtn()
        .clearUserStatusDescription()
        .clickUserDescriptionSaveBtn();
});

const homePage = new HomePage();
const headerAndFooter = new HeaderAndFooter();
const dashboard = new DashboardBreadcrumbs();

Cypress.Commands.add('createMultiBranchPipeline', (pipelineName) => {
    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(pipelineName)
        .selectMultibranchPipelineItem()
        .clickOkBtnAndGoMultiPipelineConfig()
   })

Cypress.Commands.add('createFolderProject', (folderName) => {
    homePage
        .clickNewItemSideMenuLink()
        .selectFolderItem()
        .typeNewItemNameInputField(folderName)
        .clickOkBtnAndGoFolderConfig()
        .clickSaveBtnAndGoFolder()
    headerAndFooter
        .clickJenkinsHomeLink()
})

Cypress.Commands.add('createMultiConfigurationProject', (multiConfigurationProjectName) => {
    homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(multiConfigurationProjectName)
        .selectMultiConfigurationProjectItem()
        .clickOkBtnAndGoMultiConfProjectConfig()
        .clickSaveButton()
    headerAndFooter
        .clickJenkinsHomeLink()
})

Cypress.Commands.add('createOrgFolderProject', (folderName) => {
    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(folderName)
        .selectOrgFolderItem()
        .clickOkBtnAndGoOrgFolderConfig()
    dashboard
        .clickDashboardLinkAndGoHomePage();
})

Cypress.Commands.add('createFreestyleProject', (freestyleProjectName) => {
    homePage
        .clickNewItemSideMenuLink()
        .selectFreestyleProjectItem()
        .typeNewItemNameInputField(freestyleProjectName)
        .clickOkBtnAndGoFreestyleProjectConfig()
    headerAndFooter
        .clickJenkinsHomeLink()
});


Cypress.Commands.add('createOrganizationFolderProject', (orgFolderName) => {
    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(orgFolderName)
        .selectOrgFolderItem()
        .clickOkBtnAndGoOrgFolderConfig()
        .clickSaveBtnAndGoOrgFolder()
    headerAndFooter
        .clickJenkinsHomeLink();
});

Cypress.Commands.add('addFolderDescription', (folderDescription) => {
    homePage
        .clickOnFolderNameLink()
        .clickAddEditDescriptionBtn()
        .typeFolderDescription(folderDescription)
        .saveFolderDescription()
    headerAndFooter
        .clickJenkinsHomeLink()
});

Cypress.Commands.add('createMultBranchPipeline', (name) => {
    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(name)
        .selectMultibranchPipelineItem()
        .clickOkBtnAndGoMultiPipelineConfig();
    headerAndFooter
        .clickJenkinsHomeLink()
});

  Cypress.Commands.add('createPipeline', (pipelineName) => {
    homePage
          .clickNewItemSideMenuLink()
          .typeNewItemNameInputField(pipelineName)
          .selectPipelineItem()
          .clickOkBtnAndGoPipelineConfig();
    headerAndFooter
          .clickJenkinsHomeLink()
});

Cypress.Commands.add('createMultiConfigProject', (name) => {
    homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(name)
        .selectMultiConfigurationProjectItem()
        .clickOkBtnAndGoMultiConfProjectConfig()
        .clickSaveButton()
    dashboard
        .clickDashboardLinkAndGoHomePage();    
});

Cypress.Commands.add('addBuildDescription', (buildDescription) => {
    homePage
        .clickBuildHistoryLink()
        .clickBuildLink()
        .clickBuildDescriptionLink()
        .typeBuildDescriptionInput(buildDescription)
        .clickSaveDescriptionBtn();
    headerAndFooter
        .clickJenkinsHomeLink();
});

Cypress.Commands.add('createUser',  (userName, password, confirmPassword, emailAddress) =>{
    homePage
        .clickManageJenkinsSideMenu()
        .clickManageUsersLink()
        .clickCreateUserBtn()
        .typeUserNameInputField(userName)
        .typePasswordInputField(password)
        .typeConfirmPasswordInputField(confirmPassword)
        .typeEmailAddressInputField(emailAddress)
        .clickCreateUserBtn();
    dashboard
        .clickDashboardLinkAndGoHomePage();
});

Cypress.Commands.add('createPipelineWithDescription', (pipelineName) => {
    homePage
          .clickNewItemSideMenuLink()
          .typeNewItemNameInputField(pipelineName)
          .selectPipelineItem()
          .clickOkBtnAndGoPipelineConfig()
          .typeDescriptionOnPiplineConfigPage()
          .clickSaveBtnAndGoPipeline()
    headerAndFooter
          .clickJenkinsHomeLink()
});

Cypress.Commands.add('createNewView', (viewName, viewType) => {
    homePage
        .clickMyViewSideMenuLink()
        .verifyAndClickAddNewViewLink()
        .typeNewViewNameIntoInputField(viewName)
        .checkViewTypeRadioButton(viewType)
        .clickCreateNewViewButton()
        .clickOkButtonSaveView();
    headerAndFooter
        .clickJenkinsHomeLink();
});

Cypress.Commands.add("openHomePage", () => {
    headerAndFooter.clickHeadIcon();

    if(homePage.getDashboardElement().should("have.length", 1)) {
        homePage.getTable().should("be.visible");
    } else {
        homePage.retrieveWelcomeMessage().should("have.text", homePageHeader);
    }
});

Cypress.Commands.add('openFreestyleProjectConfigurePage', () => {
    homePage
        .clickFreestyleProjectNameLink()
        .clickConfigureSideMenuLink()
        .retrievePageHeader().should("equal", configurePageHeader);
});
