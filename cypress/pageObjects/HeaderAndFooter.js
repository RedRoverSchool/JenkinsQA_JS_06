import UserConfigurePage from "../pageObjects/UserConfigurePage";
import LinkRestAPIPage from "../pageObjects/LinkRestAPIPage"
class HeaderAndFooter {
    getUserNameLink = () => cy.get('div.login a[href*="user"]');
    getUserDropDownBtn = () => cy.get('div.login a[href*="user"] button');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    getLinkRestAPI = () => cy.get('[href="api/"]');







    clickUserDropDownBtn() {
        this.getUserDropDownBtn().realHover().click();
        return this;
    }

    selectUserConfigureMenu() {
        this.getUserConfigureMenu().click();
        return new UserConfigurePage();
    }
    
    clickLinkRestAPI() {
        this.getLinkRestAPI().click()
        return new LinkRestAPIPage();
    }







}
export default HeaderAndFooter;