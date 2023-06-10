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

const homePage = new HomePage();

Cypress.Commands.add('createMultiBranchPipeline', (pipelineName) => {
    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(pipelineName)
        .selectMultibranchPipelineItem()
        .clickOkBtnAndGoMultiPipelineConfig()
   })

const headerAndFooter = new HeaderAndFooter();
const dashbord = new DashboardBreadcrumbs();

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
        .selectMultiConfigurationProjectItem()
        .typeNewItemNameInputField(multiConfigurationProjectName)
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
    dashbord
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

Cypress.Commands.add('createMultiConfigProject', (multiConfigurationProjectName) => {
    homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(multiConfigurationProjectName)
        .selectMultiConfigurationProjectItem()
        .clickOkBtnAndGoMultiConfProjectConfig()
        .clickSaveButton()
    dashbord
        .clickDashboardLinkAndGoHomePage();    
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
