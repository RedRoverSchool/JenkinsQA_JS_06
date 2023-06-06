/// <reference types="cypress" />
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {credentialsPageHeader}  from '../../fixtures/pom_fixtures/userCredentialsPageData.json';

describe('userCredentials', () => {
    const headerAndFooter = new HeaderAndFooter();

    it('AT_01.07_009 | Verify Redirection to Credential Page from User Dropdown Menu', () => {
        headerAndFooter
                       .clickUserDropDownBtn()
                       .selectUserCredentialsMenu()
                       .checkUrlCredentialsPage()
                       .getCredentialsHeader()
                       .should('have.text',credentialsPageHeader)                             
    })
})