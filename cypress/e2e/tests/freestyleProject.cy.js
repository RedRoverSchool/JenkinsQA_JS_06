/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectRenamePage from "../../pageObjects/FreestyleProjectRenamePage"
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import { freestyleProjectNewName } from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import { headerText } from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import { errorMessage } from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import freestyleProject from"../../fixtures/pom_fixtures/freestyleProjectPage.json"
import FreestyleProjectPage from "../../pageObjects/FreestyleProjectPage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import {description} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {editDescription} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"

describe('freestyleProject', () => {

    const homePage = new HomePage();
    const freestyleProjectPage = new FreestyleProjectPage();
    const freestyleProjectRenamePage = new FreestyleProjectRenamePage();
    

    it('AT_12.03_007 | Rename freestyle project using side menu', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickRenameSideMenuLink()
            .typeNewNameInputFild(freestyleProjectNewName)
            .clickRenameBtn()
            .getFreestyleProjectHeader()
            .should('have.text', headerText + freestyleProjectNewName)
    });

    it('AT_12.03.006 | Freestyle project Rename project without any changes', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickRenameSideMenuLink()
            .clickRenameBtn()
            .getFreestyleProjectHeader()
            .should('have.text', errorMessage);
    })

    freestyleConfigurePage.buildSteps.forEach((buildStep, idx) => {
        it(`AT_12.05_005 | Verify user can choose ${buildStep} from the dropdown menu list <Add build step> while configuring the freestyle project`, () => {
            homePage
                .clickNewItemSideMenuLink()
                .typeNewItemNameInputField(newItemData.freestyleProjectName)
                .selectFreestyleProjectItem()
                .clickOkBtnAndGoFreestyleProjectConfig()

                .clickLeftSidePanelBuildStepsBtn()
                .clickAddBuildStepBtn()
                .selectBuildStepFromMenuListItem(idx)
                .checkBuilderWindowHeaderName(buildStep)
                .clickSaveBtnAndGoFreestyleProject()
                .clickConfigureSideMenuLink()
                .clickLeftSidePanelBuildStepsBtn()
                .getBuilderWindow()
                .should('be.visible')
                .and('exist')
        })
    });

    it('AT_12.06_001 | Freestyle project "Disable project" option exists', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectHeader()
            .should('include.text', newItemData.freestyleProjectName)

        freestyleProjectPage
            .getDisableProjectBtn()
            .should('have.text', 'Disable Project')
            .and('be.visible')
            .and('be.enabled')
    });

    it('AT_12.03_002 | Verify that using the same name an error message is appeared', function () {
        cy.createFreestyleProject(newItemData.freestyleProjectName)
        homePage        
            .clickNamesProjects()
            .clickRenameSideMenuLink()
            .getNewNameInputFild()
            .should('have.value', newItemPage.freestyleProjectName)
        freestyleProjectRenamePage
            .clickRenameBtn()

        freestyleProjectRenamePage
            .getErrorTitle()
            .should('have.text', freestyleProject.errorMessage)
            .and('be.visible')
        freestyleProjectRenamePage
            .getErrorMessage()
            .should('have.text', freestyleProject.message)
            .and('be.visible')
    });  
    
    it('AT 12.02.006 | Delete Freestyle project using dropdown menu', () => {
        cy.createFreestyleProject(newItemData.freestyleProjectName);

        homePage
            .clickProjectNameDropdown()
            .hoverAndClickProjectDrpDwnBtn(newItemData.freestyleProjectName)
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    }); 

    it('AT_12.07_001 | Freestyle project> Edit description> Verify possiblity to type the text', function () {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            
        freestyleProjectPage
            .clickgetAddDescriptoinLinkBtn()
            .typeDescriptionToInputField(description)
            .clickSaveDescriptionBtn()
            .clickEditDescriptionBtn()
            .clearInputField()
            .typeEditDescriptionToInputField(editDescription)
            .getInputField()
            .should('have.value', editDescription)
    })
});