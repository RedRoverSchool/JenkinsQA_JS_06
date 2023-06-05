/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {restAPIPageTitle} from "../../fixtures/pom_fixtures/restAPIPage.json";
import {homePageHeader} from "../../fixtures/pom_fixtures/homePage.json";
import resultSearchBox from "../../fixtures/pom_fixtures/resultSearchBox.json";
import loginPage from "../../fixtures/pom_fixtures/loginPage.json";
import {userDropdownMenuItems} from "../../fixtures/pom_fixtures/headerAndFooter.json";
import {inputText} from "../../fixtures/pom_fixtures/headerAndFooter.json";
import HomePage from "../../pageObjects/HomePage";
describe('headerAndFooter', () => {

    const headerAndFooter = new HeaderAndFooter();
    const homePage = new HomePage();

    it('AT_03.01.002 | Verify link Rest Api redirected to the page with correct header', () => {
        headerAndFooter
        .clickRestAPILink()
        .getRestApiTitle()
        .should('have.text',restAPIPageTitle)
    })

    it('AT_01.01 _021| Verify Head Icon is clickable.', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu();

        headerAndFooter
            .clickJenkinsHomeLink()
            .getHomepageHeader()
            .should('have.text', homePageHeader);
    });

    it('AT_01.03.023 Verify User Icon has dropdown menu with given links', () => {
        headerAndFooter
           .clickUserDropDownBtn()
           .getUserDropdownMenuItemList()
           .should('deep.equal', headerAndFooterData.userDropdownMenuItems);
     });

    it('AT_01.02_019 | No results appear after input text in the Search box', function () {
        headerAndFooter
            .searchTextSearchBox(headerAndFooterData.inputText)
            .getResultNoMatch()
            .should('have.text', resultSearchBox.resultSearchNoMatchMsg)
    })

    it('AT_01.08_002 | Verify logout button redirects to the login page', function() {
        headerAndFooter
            .clickLogOutBtn()
            .getWelcomeMessage()
            .should('have.text', loginPage.welcomeMessage)
    });

    it('AT_01.02_003 | Verify the placeholder text “Search (CTRL+K)" in the input field of the Search box', () => {
        headerAndFooter
            .getSearchBoxInputField()
            .should('have.attr', 'placeholder', headerAndFooterData.searchBoxPlaceholder);
    });

    it('AT_01.02_032 | Verify that the search query matches the result in the search dropdown', () => {
        headerAndFooter
            .typeSearchBoxInputField(headerAndFooterData.inputLowerCase)
            .trimSearchBoxResultDropDownList()
            .should('satisfy', ($text) => {
                return headerAndFooter
                        .isIncludedLowerAndUpperLetters($text, headerAndFooterData.inputLowerCase, headerAndFooterData.inputUpperCase);
            })
    });

     it('AT_01.01_019 | Redirection to the homepage by label', () => {
        homePage
            .clickNewItemSideMenuLink()

        headerAndFooter    
            .clickJenkinsHomeLink() 
            
        homePage    
            .getHomePageLink()
            .should('eq', `http://localhost:${Cypress.env('local.port')}/`);
     });
})
