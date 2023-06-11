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

import DashboardBreadcrumbs from "../pageObjects/DashboardBreadcrumbs";
import HeaderAndFooter from "../pageObjects/HeaderAndFooter";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();
const headerAndFooter = new HeaderAndFooter();
const dashboard = new DashboardBreadcrumbs();

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
})

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