/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {userFullName} from "../../fixtures/pom_fixtures/userConfigure.json";

describe('userConfigure', () => {

    const headerAndFooter = new HeaderAndFooter();

    it('verify user can rename Fullname ans name is changed in user profile', () => {
        
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeFullNameInputField(userFullName)
            .clickUserConfigSaveBtn()
            .trimUserPageHeaderName()
            .should('eq', userFullName)
    })
})