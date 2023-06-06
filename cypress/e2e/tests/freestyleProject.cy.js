/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import freestyleConfigurePageData from "../../fixtures/pom_fixtures/freestyleConfigurePage.json"

describe('freestyleProject', () => {

    const homePage = new HomePage();
    
    it('AT_12.03_007 | Rename freestyle project using side menu', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()            
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickRenameSideMenuLink()
            .typeNewNameInputFild(freestyleProjectPageData.freestyleProjectNewName)
            .clickRenameBtn()
            .getFreestyleProjectHeader()            
            .should('have.text', freestyleProjectPageData.headerText + freestyleProjectPageData.freestyleProjectNewName)
    });

    it('AT_12.03.006 | Freestyle project Rename project without any changes', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickRenameSideMenuLink()
            .clickRenameBtn()
            .getFreestyleProjectHeader()   
            .should('have.text', freestyleProjectPageData.errorMessage);
    })

    freestyleConfigurePageData.buildSteps.forEach((buildStep,idx) => {
        it(`AT_12.05_005 | Verify user can choose ${buildStep} from the dropdown menu list <Add build step> while configuring the freestyle project`, () => {
            homePage    
                .clickNewItemSideMenuLink()
                .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
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