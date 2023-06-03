import UserConfigurePage from "../pageObjects/UserConfigurePage";
import RestAPIPage from "./RestAPIPage"
import HomePage from "../pageObjects/HomePage";
class HeaderAndFooter {
    getUserNameLink = () => cy.get('div.login a[href*="user"]');
    getUserDropDownBtn = () => cy.get('div.login a[href*="user"] button');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    getUserDropdownChevronBtn = () => cy.get('.login button');
    getUserDropdownMenuItemsList = () => cy.get('.bd li');
    getRestAPILink = () => cy.get('[href="api/"]');
    getJenkinsHomeLink = () => cy.get('#jenkins-home-link');


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

    clickUserDropdownChevronBtn() {
        this.getUserDropdownChevronBtn().realHover().click();
        return this;
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
}
export default HeaderAndFooter;