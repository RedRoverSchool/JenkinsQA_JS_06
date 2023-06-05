/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemData from "../../fixtures/pom_fixtures/newItemPage.json";
import {freestyleProjectNewName} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {headerText} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {errorMessage} from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import {description} from "../../fixtures/pom_fixtures/freestyleProjectConfigurateProject.json";

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
    });

    it.only('AT_12.05_001 | Freestyle project > Add description', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .typeDescriptionInputField(description)
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectDescription()
            .should('contain.text', description);
    })
});