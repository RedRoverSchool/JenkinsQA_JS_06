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
import HomePage from "../pageObjects/HomePage";
import HeaderAndFooter from "../pageObjects/HeaderAndFooter";
import DashboardBreadcrumbs from "../pageObjects/DashboardBreadcrumbs";

Cypress.Commands.add('createFolderProject', (folderName) => {
    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();

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
    const homePage = new HomePage();

    homePage
    .clickCreateJobLink()
    .selectMultiConfigurationProjectItem()
    .typeNewItemNameInputField(folderName)
    .clickOkBtnAndGoMultiConfProjectConfig()
    .clickSaveButton();
})

Cypress.Commands.add('CreateFreestyleProject', (projectName) => {  

    const homePage = new HomePage();
    const dashbord = new DashboardBreadcrumbs;

    homePage
        .clickNewItemSideMenuLink()
        .typeNewItemNameInputField(projectName)
        .selectFreestyleProjectItem()            
        .clickOkBtnAndGoFreestyleProjectConfig();
    dashbord
        .clickDashboardLinkAndGoHomePage();
    })
