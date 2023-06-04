/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {restAPIPageTitle} from "../../fixtures/pom_fixtures/restAPIPage.json"
<<<<<<< HEAD
import{homePageHeader} from "../../fixtures/pom_fixtures/homePage.json";
=======
import {userDropdownMenuItems} from "../../fixtures/pom_fixtures/headerAndFooter.json";
>>>>>>> main

describe('headerAndFooter', () => {

    const headerAndFooter = new HeaderAndFooter();

    it('AT_03.01.002 | Verify link Rest Api redirected to the page with correct header', () => {
        headerAndFooter
        .clickRestAPILink()
        .getRestApiTitle()
        .should('have.text',restAPIPageTitle)
    })

    it('AT_01.01 _021| Verify Head Icon is clickable.', () => {
        headerAndFooter
        .clickUserDropDownBtn()
        .selectUserConfigureMenu()
        .clickJenkinsHeaderIcon()
        .getHomepageHeader()
        .should('have.text', homePageHeader);
    });

    it('AT_01.03.023 Verify User Icon has dropdown menu with given links', () => {
        headerAndFooter
           .clickUserDropDownBtn()
           .getUserDropdownMenuItemList()
           .should('deep.equal', userDropdownMenuItems);
     });
})
