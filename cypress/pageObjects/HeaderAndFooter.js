import UserConfigurePage from "../pageObjects/UserConfigurePage";
import RestAPIPage from "./RestAPIPage"
import HomePage from "../pageObjects/HomePage";
import ResultSearchBoxPage from "./ResultSearchBoxPage";

class HeaderAndFooter {
    getUserNameLink = () => cy.get('div.login a[href*="user"]');
    getUserDropDownBtn = () => cy.get('div.login a[href*="user"] button');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    getUserDropdownMenuItemsList = () => cy.get('.bd li');
    getRestAPILink = () => cy.get('[href="api/"]');
    getJenkinsHomeLink = () => cy.get('#jenkins-home-link');
    getSearchBox = () => cy.get('#search-box');


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

    clickJenkinsHomeLink() {
        this.getJenkinsHomeLink().click();
        return new HomePage();
    }

    searchTextSearchBox(text) {
        this.getSearchBox().type(text + '{enter}');
        return new ResultSearchBoxPage();
    }

}
export default HeaderAndFooter;