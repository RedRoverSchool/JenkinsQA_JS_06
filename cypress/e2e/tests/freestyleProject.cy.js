/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import {freestyleProjectNewName} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {headerText} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"


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
            .getProjectName()            
            .should('have.text', headerText + freestyleProjectNewName)
    });
});