/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import freestyleProjectPage from "../../fixtures/pom_fixtures/freestyleProjectPage.json";

describe('dashbordVerifyTableSize', () => {
    const homePage = new HomePage

    beforeEach('Create project', () => {
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(freestyleProjectPage.freestyleProjectNewName)
        .selectFreestyleProjectItem()
        .clickOkBtnAndGoFreestyleProjectConfig()
        .clickHomePage()
    })

    it('AT20.01.007.1|DashbordVerify size of project table S', () => {
        homePage
        .clickTableSizeBtnS()
        .verifyTableSizeS()
    })

    it('AT20.01.007.2|DashbordVerify size of project table M',() => {
        homePage
        .clickTableSizeBtnM()
        .verifyTableSizeM()
    })

    it('AT20.01.007.3|DashbordVerify size of project table L',() => {
        homePage
        .clickTableSizeBtnL()
        .verifyTableSizeL()
    })
})