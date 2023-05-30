import HomePage from "./HomePage";

class Header {

    getLogoIcon = () => cy.get('img#jenkins-head-icon');
    getLogoName = () => cy.get('img#jenkins-name-icon');
    getSearchBox = () => cy.get('#searchform input');
    getUserIcon = () => cy.get('a.model-link .icon-md');
    getUserIcon = () => cy.get('a.model-link .icon-md');
    getUserNameLink = () => cy.get('.page-header__hyperlinks a.model-link[href*="user"]>span');
    getUserDropDownBtn = () => cy.get('a.model-link[href*="user"]>button');
    getUserBuilsMenu = () => cy.get('#breadcrumb-menu li a[href*="builds"] span');
    getUserConfigureMenu = () => cy.get('#breadcrumb-menu li a[href*="configure"] span');
    getDashboardLink = () => cy.get('li.jenkins-breadcrumbs__list-item a');
    getDashboardDropDownBtn = () => cy.get('li.jenkins-breadcrumbs__list-item a>button');
    getDashboardChildrenBtn = () => cy.get('ol.jenkins-breadcrumbs__list li.children');


    clickLogoIcon(){
        this.getLogoIcon().click();
        return new HomePage();
    }
















}
export default Header;