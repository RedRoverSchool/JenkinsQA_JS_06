import UserConfigurePage from "../pageObjects/UserConfigurePage";
import RestAPIPage from "./RestAPIPage"
import MyViewPage from "./MyViewPage";
import HomePage from "../pageObjects/HomePage";
import ResultSearchBoxPage from "./ResultSearchBoxPage";

class HeaderAndFooter {
    getUserNameLink = () => cy.get('div.login a[href*="user"]');
    getUserDropDownBtn = () => cy.get('div.login a[href*="user"] button');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    getUserDropdownMenuItemsList = () => cy.get('.bd li');
    getRestAPILink = () => cy.get('[href="api/"]');
    getUserMyViewsMenu = () => cy.get('#breadcrumb-menu li a[href*="my"] span');
    getJenkinsHomeLink = () => cy.get('#jenkins-home-link');
    getSearchBoxInputField = () => cy.get('input#search-box');
    getSearchBoxResultDropDownList = () => cy.get('#search-box-completion li:not([style="display: none;"])');

    clickUserDropDownBtn() {
        this.getUserDropDownBtn().realHover().click();
        return this;
    }

    selectUserConfigureMenu() {
        this.getUserConfigureMenu().click();
        return new UserConfigurePage();
    }
    
    clickRestAPILink() {
        this.getRestAPILink().click()
        return new RestAPIPage();
    }

    getUserDropdownMenuItemList() {
        return this
        .getUserDropdownMenuItemsList()
        .then($els => { 
            return Cypress._.map($els, 'innerText')
        }); 
    }

    selectUserMyViewsMenu() {
        this.getUserMyViewsMenu().click();
        return new MyViewPage();
    }

    clickJenkinsHomeLink() {
        this.getJenkinsHomeLink().click();
        return new HomePage();
    }

    searchTextSearchBox(text) {
        this.getSearchBoxInputField().type(text + '{enter}');
        return new ResultSearchBoxPage();
    }

    typeSearchBoxInputField(text) {
        this.getSearchBoxInputField().type(text);
        return this;
    }

    trimSearchBoxResultDropDownList() {
        return this.getSearchBoxResultDropDownList().each(($el) => {
            return cy.wrap($el.text().trim());
        });
    }

    isIncludedLowerAndUpperLetters(text, lowerLetter, upperLetter) {
        return text.includes(lowerLetter) || text.includes(upperLetter);
    }
}
export default HeaderAndFooter;