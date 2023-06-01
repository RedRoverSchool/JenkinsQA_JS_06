/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import Header from "../../pageObjects/Header";

import newItems from "../../fixtures/newItems.json"


describe('createFreestyleProject', () => {
    const homePage = new HomePage();
    const header = new Header();

    it('verify user can create job FP', () => {
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectFP()
            .clickOKBtnGoToConfigPage()
            .clickSubmitBtnGoFreestyleProjectPage()

        header
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })
})
