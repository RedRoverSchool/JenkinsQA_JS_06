/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import Header from "../../pageObjects/Header";

import newItems from "../../fixtures/newItems.json"


describe('newItemCreateProject', () => {
    const homePage = new HomePage();
    const header = new Header();

    it('verify user can create job FP', () => {
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectFP()
            .clickOKBtnGoToFPConfigPage()
            .clickSubmitBtnGoFreestyleProjectPage()

        header
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })
})
