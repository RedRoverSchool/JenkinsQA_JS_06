/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {  restAPIPageTitle  } from "../../fixtures/pom_fixtures/restAPIPage.json";
import {  homePageHeader  } from "../../fixtures/pom_fixtures/homePage.json";
import resultSearchBox from "../../fixtures/pom_fixtures/resultSearchBox.json";
import loginPage from "../../fixtures/pom_fixtures/loginPage.json";
import headerAndFooterData from "../../fixtures/pom_fixtures/headerAndFooter.json";
import dashboardBreadcrumbs from "../../fixtures/pom_fixtures/dashboardBreadcrumbs.json";
import {version} from "../../fixtures/pom_fixtures/headerAndFooter.json";
import { pageTitle } from "../../fixtures/pom_fixtures/headerAndFooter.json";
import {userDescription} from "../../fixtures/pom_fixtures/userConfigurePage.json"

describe('headerAndFooter', () => {

    const headerAndFooter = new HeaderAndFooter();

    it('AT_03.02_008 | <Footer> Verify the Link "Jenkins" in the footer', () => {
        headerAndFooter
            .clickJenkinsVersionLink()
            .getPageTitle()
            .should('contain', pageTitle)
    })

    it('AT_03.01.002 | Verify link Rest Api redirected to the page with correct header', () => {
        headerAndFooter
            .clickRestAPILink()
            .getRestApiTitle()
            .should('have.text', restAPIPageTitle)
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
            .createUserDropdownMenuItemsList()
            .should('deep.equal', headerAndFooterData.userDropdownMenuItems);
    });

    it('AT_01.02_019 | No results appear after input text in the Search box', function () {
        headerAndFooter
            .searchTextSearchBox(headerAndFooterData.inputText)
            .getResultNoMatch()
            .should('have.text', resultSearchBox.resultSearchNoMatchMsg)
    })

    it('AT_01.08_002 | Verify logout button redirects to the login page', function () {
        headerAndFooter
            .clickLogOutBtn()
            .getWelcomeMessage()
            .should('have.text', loginPage.welcomeMessage)
    });

    it.skip('AT_01.02_003 | Verify the placeholder text “Search (CTRL+K)" in the input field of the Search box', () => {
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

    it('AT_01.01_003 | Verify Jenkins icon and name-icon are visible', () => {
        headerAndFooter
            .getHeadIcon()
            .should('be.visible');
        headerAndFooter
            .getHeadIconName()
            .should('be.visible');
    });
  
    it('AT_01.06_009 | Header>Link "My Views" in the “User” dropdown-menu is visible and redirects', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserMyViewsMenu()
            .getDashboardMyViewsLink().should('have.text', dashboardBreadcrumbs.dashboardDropdownMenu[4])
    });
    
    it('AT_03.02_001 | Footer>Verify Link Jenkins ver number is correct', () =>{
        headerAndFooter
            .getJenkinsLinkVerNumber()
            .should('be.visible')
            .and('have.text', version.number)
            .and('have.attr', 'href', version.link)
            .and('have.css', 'color', version.rgb)
    });
    
    it('AT_01.05_12 | Verify User can configure user account, add info about user', () => {
        headerAndFooter
            .clickUserDropDownBtn() 
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userDescription)
            .clickUserConfigSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userDescription)
    });

    it('AT_01.03_030 Verify User Dropdown menu has links with specifiс endings.', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .createUserMenuItemList().each(($el, idx) => {
                expect($el.html()).contain(headerAndFooterData.userDropdownMenuItems[idx]);             
            })           
    });

})
