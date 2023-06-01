import HomePage from "./HomePage";
import UserConfigPage from "./UserConfigPage";
import UserPage from "./UserPage";

class Header {
    getLogoIcon = () => cy.get('img#jenkins-head-icon');
    getLogoName = () => cy.get('img#jenkins-name-icon');
    getSearchBox = () => cy.get('#searchform input');
    getUserIcon = () => cy.get('a.model-link .icon-md');
    getUserNameLink = () => cy.get('.page-header__hyperlinks a.model-link[href*="user"]>span');
    getUserDropDownBtn = () => cy.get('a.model-link[href*="user"]>button');
    getUserBuildsMenu = () => cy.get('#breadcrumb-menu li a[href*="builds"] span');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    
    


    clickLogoIcon() {
        this.getLogoIcon().click();
        return new HomePage();
    }

    clickUserDropDownBtn() {
        this.getUserDropDownBtn().realHover().click()
        return this;

    }

    clickUserNameLink () {
        this.getUserNameLink().click()
        return new UserPage()
    }

    selectUserConfigMenu() {
        this.getUserConfigureMenu().click()
        return new UserConfigPage();
    }
}
export default Header;