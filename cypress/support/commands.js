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

import newItemData from "../fixtures/pom_fixtures/newItemPage.json";
import HomePage from "../pageObjects/HomePage";
const homePage = new HomePage();

Cypress.Commands.add('createMultiBranchPipeline', (pipelineName) => {
    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(pipelineName)
        .selectMultibranchPipelineItem()
        .clickOkBtnAndGoMultiPipelineConfig()
   })

import HeaderAndFooter from "../pageObjects/HeaderAndFooter";
const headerAndFooter = new HeaderAndFooter();

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

Cypress.Commands.add('createMultiConfigurationProject', (folderName) => {
    homePage
        .clickCreateJobLink()
        .selectMultiConfigurationProjectItem()
        .typeNewItemNameInputField(folderName)
        .clickOkBtnAndGoMultiConfProjectConfig()
        .clickSaveButton();
})

Cypress.Commands.add('createFreestyleProject', (freestyleProjectName) => {
    homePage
        .clickNewItemSideMenuLink()
        .selectFreestyleProjectItem()
        .typeNewItemNameInputField(freestyleProjectName)
        .clickOkBtnAndGoFreestyleProjectConfig()
});

