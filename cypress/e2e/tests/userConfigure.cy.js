/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userConfigurePageData from "../../fixtures/pom_fixtures/userConfigurePage.json";

describe('userConfigure', () => {

    const headerAndFooter = new HeaderAndFooter();

    it('verify user can rename Fullname ans name is changed in user profile', () => {
        
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeFullNameInputField(userConfigurePageData.userFullName)
            .clickUserConfigSaveBtn()
            .trimUserPageHeaderName()
            .should('eq', userConfigurePageData.userFullName)
    })
})
