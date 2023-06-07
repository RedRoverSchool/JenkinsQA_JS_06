import NewItemPage from "./NewItemPage";
import HomePage from "./HomePage";

class DashboardBreadcrumbs {

   getDashboardDropdownBtn = () => cy.get('#breadcrumbs a');
   getDashboardDropdownMenuItemsList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li');
   getDashboardNewItemLink = () => cy.get('#breadcrumb-menu [href="/view/all/newJob"]');
   getDashboardLink = () => cy.get('.jenkins-breadcrumbs__list-item [href="/"]');
   getDashboardDropDownMenuList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li>a>span');

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
}

export default DashboardBreadcrumbs;
