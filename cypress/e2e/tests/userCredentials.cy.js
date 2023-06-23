/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userCredentialsPageData  from '../../fixtures/pom_fixtures/userCredentialsPage.json';

describe('userCredentials', () => {
    const headerAndFooter = new HeaderAndFooter();

    it('AT_01.07_009 | Verify Redirection to Credential Page from User Dropdown Menu', () => {
        headerAndFooter
                       .clickUserDropDownBtn()
                       .selectUserCredentialsMenu()
                       .checkUrlCredentialsPage()
                       .getCredentialsHeader()
                       .should('have.text', userCredentialsPageData.credentialsPageHeader)                             
    })

    userCredentialsPageData.tableSize.forEach((size) => {
        it(`AT_01.07_010 | Verify clicking on ${size.size} icon will change the table size of Credential Page from User Dropdown Menu`, function() {
            headerAndFooter
                       .clickUserDropDownBtn()
                       .selectUserCredentialsMenu()
                       .clickUserCredIconBtns(size.size)
                       .getUserCredPageTables().should('have.css','height',size.heigth)
        });
});

})