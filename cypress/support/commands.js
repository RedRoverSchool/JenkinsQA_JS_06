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
import Header from "../pageObjects/Header"

// const homePage = new HomePage();
// const header = new Header();

Cypress.Commands.add('createFreestyleProject', (projectName) => { 
    HomePage
            .clickNewItemMenuLink()
            .typeProjectName(projectName)
            .clickTypeProjectFP()
            .clickOKBtn()
 })

 Cypress.Commands.add('addDescriptionFreestyleProject', (text) => { 
    Header
        .clickLogoIcon()
        .clickCreatedProjectLink()
        .clickDescriptionBtn()
        .typeDescriptionText(text)
        .clickSaveDescriptionBtn() 
 })