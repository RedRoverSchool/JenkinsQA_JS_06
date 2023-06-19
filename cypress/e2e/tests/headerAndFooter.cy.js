/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import restAPIPageData from "../../fixtures/pom_fixtures/restAPIPage.json";
import homePageData from "../../fixtures/pom_fixtures/homePage.json";
import resultSearchBoxData from "../../fixtures/pom_fixtures/resultSearchBox.json";
import loginPageData from "../../fixtures/pom_fixtures/loginPage.json";
import headerAndFooterData from "../../fixtures/pom_fixtures/headerAndFooter.json";
import dashboardBreadcrumbsData from "../../fixtures/pom_fixtures/dashboardBreadcrumbs.json";
import userConfigurePageData from "../../fixtures/pom_fixtures/userConfigurePage.json"
import HomePage from "../../pageObjects/HomePage";
import searchBoxDocumentationPageData from "../../fixtures/pom_fixtures/searchBoxDocumentationPage.json";
import userBuildsPageData from "../../fixtures/pom_fixtures/userBuildsPage.json";
import UserProfilePageData from "../../fixtures/pom_fixtures/userProfilePage.json";
import restApiDocPageData from "..//..//fixtures/pom_fixtures/restApiDocPage.json";

describe('headerAndFooter', () => {

    const headerAndFooter = new HeaderAndFooter();
    const homePage = new HomePage();

    it('AT_03.02_008 | <Footer> Verify the Link "Jenkins" in the footer', () => {
        headerAndFooter
            .clickJenkinsVersionLink()
            .getPageTitle()
            .should('contain', headerAndFooterData.pageTitle)
    })

    it('AT_03.01.002 | Verify link Rest Api redirected to the page with correct header', () => {
        headerAndFooter
            .clickRestAPILink()
            .getRestApiTitle()
            .should('have.text', restAPIPageData.restAPIPageTitle)
    })

    it('AT_01.01 _021| Verify Head Icon is clickable.', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu();

        headerAndFooter
            .clickJenkinsHomeLink()
            .getHomepageHeader()
            .should('have.text', homePageData.homePageHeader);
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
            .should('have.text', resultSearchBoxData.resultSearchNoMatchMsg)
    })

    it('AT_01.08_002 | Verify logout button redirects to the login page', function () {
        headerAndFooter
            .clickLogOutBtn()
            .getWelcomeMessage()
            .should('have.text', loginPageData.welcomeMessage)
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
            .getDashboardMyViewsLink().should('have.text', dashboardBreadcrumbsData.dashboardDropdownMenu[4])
    });

    it('AT_03.02_001 | Footer>Verify Link Jenkins ver number is correct', () => {
        headerAndFooter
            .getJenkinsLinkVerNumber()
            .should('be.visible')
            .and('have.text', headerAndFooterData.version.number)
            .and('have.attr', 'href', headerAndFooterData.version.link)
            .and('have.css', 'color', headerAndFooterData.version.rgb)
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
    
    it('AT_01.05_12 | Verify User can configure user account, add info about user', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userConfigurePageData.userDescription)
            .clickUserConfigSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userConfigurePageData.userDescription)
    });

    it('AT_01.03_030 Verify User Dropdown menu has links with specifiс endings.', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .getUserDropdownMenuItemsList().each(($el, idx) => {
                expect($el.html()).contain(headerAndFooterData.userDropdownMenuItems[idx]);             
            })           
    });

    headerAndFooterData.userDropdownMenuItems.forEach((pageName, idx) => {
        it(`AT_01.03_029 | Header | User icon - Verify dropdown menu links redirect to the ${pageName} pages`, function () {
            headerAndFooter  
                .clickUserDropDownBtn()
                .clickEachDropdownMenuItems(idx)
                .verifyPagesUrl(headerAndFooterData.userDropdownMenuItemsUrl[idx])
                .getPageBody()
                .should('be.visible')
        });
    });

    it.skip('AT_01.02_001 | Verify that user navigate to Search Box documentation page', () => {
        headerAndFooter
            .clickSearchBoxIconTrailing()
            cy.url().should('eq', searchBoxDocumentationPageData.searchBoxDocumentationPageURL)
    });

    it('AT_03.02.005 | Footer>Verify the Link Jenkins', () => {
        headerAndFooter
            .clickJenkinsVersionLink()
            .getJenkinsPageUrl()
            .should("equal", headerAndFooterData.version.link);
    });

    it('AT_01.04.009 Header>Verify User Builds link  is clickable and redirects to the “Builds for ‘User’ “ page.', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserBuildsMenu()
            .getPageHeading()
            .should('contain', userBuildsPageData.heading + Cypress.env('local.admin.username'));
    });
   
    it('AT_01.05_014 | Header> Verify User can change info about the user on the “Configure” page.', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userConfigurePageData.userDescription)
            .clickUserConfigSaveBtn()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(UserProfilePageData.editDescription)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', UserProfilePageData.editDescription);
    });

    it('AT_01.07_004 | The users name should be visible in the header', () => {
        headerAndFooter
            .getCurrentUserName()
            .should('be.visible');
    });

    it('AT_01.05_015 Header>Verify user can visit Configure Page and delete user information', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userConfigurePageData.userDescription)
            .clickUserConfigSaveBtn()
            .clickUserDescriptionBtn()
            .clearUserStatusDescription()
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionBtn()
            .should('contain', UserProfilePageData.userAddDescriptionBtn);
    });
    it('POM>AT_03.01.002 | <Footer>Verify user can open Link "The documentation" in REST API and see page title Remote Access API',()=>{
        headerAndFooter
            .clickRestAPILink()
            .clickLinkTheDocumentation()
            .getRestApiDocPageTitle().should('contain',restApiDocPageData.restApiDocPageTitle)
            
    });
    it('AT 03.01.003 <Footer>Verify user can open Link The documentation in REST API and can see 10 modules per page',()=>{
        headerAndFooter
            .clickRestAPILink()
            .clickLinkTheDocumentation()
            .getRestApiDocPageItemsList().should('have.length',10)
            .each(($el,idx)=>{
                expect($el.text()).to.contain(restApiDocPageData.RestApiDocPageItemsList[idx])
            })
    })
})
