import NewItemPage from "./NewItemPage";
import PipelinePage from "./PipelinePage";
class DashboardBreadcrumbs {

   getDashboardDropdownBtn = () => cy.get('#breadcrumbs a');
   getDashboardDropdownMenuItemsList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li');
   
   clickDashboardDropdownBtn() {
      this.getDashboardDropdownBtn().realHover().click('right');
      return this;
   }
}
export default DashboardBreadcrumbs;
