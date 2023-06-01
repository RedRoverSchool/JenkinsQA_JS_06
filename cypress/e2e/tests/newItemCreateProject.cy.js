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

    it('verify user can create job PP', () => {
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectPP()
            .clickOKBtnGoToPPConfigPage()
            .clickSubmitBtnGoPipelineProjectPage()

        header
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })
})
