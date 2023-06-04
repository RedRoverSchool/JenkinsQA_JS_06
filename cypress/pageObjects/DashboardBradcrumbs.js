import NewItemPage from "./NewItemPage";
import PipelinePage from "./PipelinePage";
class DashboardBradcrumbs {

   getDashboardDropdownBtn = () => cy.get('#breadcrumbs a');
   getDashboardDropdownMenuItemsList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li');
   getDashboardBtn = () => cy.get('#breadcrumbBar li:first-child');
   getProjectStatustable = () => cy.get('table#projectstatus');
   getPipelineNameLink = () => cy.get('a[href="job/testPipeline/"]');
   getNewItemBtn = () => cy.get('a[href="/view/all/newJob"]');



   clickDashboardDropdownBtn() {
      this.getDashboardDropdownBtn().realHover().click('right');
      return this;
   }

   getDashboardDropdownMenuItems() {
         return  this.getDashboardDropdownMenuItemsList();
   }

   clickDashboardBtn() {
      this.getDashboardBtn().realHover().click();
      return this;
  }

   clickPipelineNameLink() {
      this.getPipelineNameLink().click()
      return new PipelinePage();
}

   clickNewItemBtn() {
      this.getNewItemBtn().realHover().click();
      return new NewItem();
}

}
export default DashboardBradcrumbs;
