import NewItemPage from "./NewItemPage";
import HomePage from "./HomePage";
import dashboardBreadcrumbsData from "../fixtures/pom_fixtures/dashboardBreadcrumbs.json"

class DashboardBreadcrumbs {

   getDashboardDropdownBtn = () => cy.get('#breadcrumbs a');
   getDashboardDropdownMenuItemsList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li');
   getDashboardNewItemLink = () => cy.get('#breadcrumb-menu [href="/view/all/newJob"]');
   getDashboardLink = () => cy.get('.jenkins-breadcrumbs__list-item [href="/"]');
   getDashboardDropDownMenuList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li>a>span');
   getDashboardManageJenkinsLink = () => cy.get('#breadcrumb-menu a[href="/manage"]')
   getReloadConfigurationFromDiskBtn = () => cy.get('#submenu0 li:nth-child(19) span')
   getFirstDashboardDropdownBtn = () => cy.get('#breadcrumbs li a').first();

   clickDashboardDropdownBtn() {
      this.getDashboardDropdownBtn().realHover().click('right');
      return this;
   }

   clickDashboardNewItemLink() {
      this.getDashboardNewItemLink().click();
      return new NewItemPage();
   }

   clickDashboardLinkAndGoHomePage() {
      this.getDashboardLink().click();
      return new HomePage();
   }
   moveMouseOverManageJenkins() {
      this.getDashboardManageJenkinsLink().trigger('mouseover')
      return this
   };
   clickReloadConfigurationFromDiskBtn() {
   this.getReloadConfigurationFromDiskBtn().click()
      return this
   };
   clickAlertWindowCancel(alertWindowText) {
      cy.on('window:confirm', (text) => {
         expect(text).to.equal(alertWindowText)
         return false})
   };

   clickEachDashboardDropDownMenuList(ind) {
      this.getDashboardDropDownMenuList().as('dashboardMenuLinks');
      cy.get('@dashboardMenuLinks').eq(ind).click();
      return this;
   };

}

export default DashboardBreadcrumbs;
