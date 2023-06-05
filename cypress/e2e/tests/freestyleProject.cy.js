/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import {freestyleProjectNewName} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {headerText} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import freestyleConfigurePage from "../../fixtures/pom_fixtures/freestyleConfigurePage.json"

describe('freestyleProject', () => {

    const homePage = new HomePage();
    
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

    freestyleConfigurePage.buildSteps.forEach((buildStep,idx) => {
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
});