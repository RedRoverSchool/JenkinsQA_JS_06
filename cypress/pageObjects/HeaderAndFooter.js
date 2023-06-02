import UserConfigurePage from "../pageObjects/UserConfigurePage";

class HeaderAndFooter {
    getUserNameLink = () => cy.get('div.login a[href*="user"]');
    getUserDropDownBtn = () => cy.get('div.login a[href*="user"] button');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    getUserDropdownChevronBtn = () => cy.get('.login button');
    getUserDropdownMenuItemsList = () => cy.get('.bd li');




    clickUserDropDownBtn() {
        this.getUserDropDownBtn().realHover().click();
        return this;
    }

    selectUserConfigureMenu() {
        this.getUserConfigureMenu().click();
        return new UserConfigurePage();
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
}
export default HeaderAndFooter;
