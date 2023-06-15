/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import myView from "../../fixtures/pom_fixtures/myView.json";
import folderPage from "../../fixtures/pom_fixtures/folderPage.json";
import freestyleProjectPage from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import newViewData from "../../fixtures/pom_fixtures/newView.json";

describe('viewEdit', () => {
    const homePage = new HomePage();

    it('AT_09.01_004 | <My Views>Create new view with Job Filters to add jobs from an existing View', () => {
        cy.createFolderProject(folderPage.folderName);
        homePage.clickFolderNameLink(folderPage.folderName);
        cy.createFreestyleProject(freestyleProjectPage.freestyleProjectNewName)
        homePage.clickFolderNameLink(folderPage.folderName);
        cy.createFreestyleProject(freestyleProjectPage.freestyleProjectName1)
        homePage.clickFolderNameLink(folderPage.folderName);
        cy.createFreestyleProject(freestyleProjectPage.freestyleProjectName2)
        cy.createFolderProject(folderPage.folderNewName);

        homePage.clickNewViewLink()
        .typeNewViewNameIntoInputField(myView.listViewName)
        .checkViewTypeRadioButton(newViewData.viewTypes.listView)
        .clickCreateNewViewButton(newViewData.viewTypes.listView)
        .checkRecurseCheckbox()
        .checkJobCheckbox(`${folderPage.folderName}/${freestyleProjectPage.freestyleProjectName1}`)
        .checkJobCheckbox(`${folderPage.folderName}/${freestyleProjectPage.freestyleProjectName2}`)
        .checkJobCheckbox(`${folderPage.folderNewName}`)
        .clickOkButtonSaveView()
        .verifyJobAmountUrlsAndNames();
    })
})