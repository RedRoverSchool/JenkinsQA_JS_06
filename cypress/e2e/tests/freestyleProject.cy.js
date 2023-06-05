/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectPage from "../../pageObjects/FreestyleProjectPage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import {freestyleProjectNewName} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {headerText} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {errorMessage} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
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

    it('AT_12.03.006 | Freestyle project Rename project without any changes', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickRenameSideMenuLink()
            .clickRenameBtn()
            .getFreestyleProjectHeader()   
            .should('have.text', errorMessage);
    })

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

    it.only('AT_12.05_001 | Freestyle project > Add description to Freestyle project', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickConfigureSideMenuLink()  
            .typeDescriptionInputField(freestyleConfigurePage.description)
            .clickSaveBtnAndGoFreestyleProject()        
            .getFreestyleProjectDescription()
            .should('contain.text', freestyleConfigurePage.description);
    })
});