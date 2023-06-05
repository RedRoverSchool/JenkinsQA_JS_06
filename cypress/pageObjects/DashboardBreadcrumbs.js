import NewItemPage from "./NewItemPage";

class DashboardBreadcrumbs {

   getDashboardDropdownBtn = () => cy.get('#breadcrumbs a');
   getDashboardDropdownMenuItemsList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li');
   getDashboardNewItemLink = () => cy.get('#breadcrumb-menu [href="/view/all/newJob"]');


   clickDashboardDropdownBtn() {
      this.getDashboardDropdownBtn().realHover().click('right');
      return this;
   }

   clickDashboardNewItemLink() {
      this.getDashboardNewItemLink().click();
      return new NewItemPage();
   }
}
export default DashboardBreadcrumbs;
