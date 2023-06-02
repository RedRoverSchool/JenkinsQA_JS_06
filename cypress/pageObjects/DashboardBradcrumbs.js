
class DashboardBradcrumbs {

   getDashboardDropdownBtn = () => cy.get('#breadcrumbs a');
   getDashboardDropdownMenuItemsList = () => cy.get('#breadcrumb-menu>div:first-child>ul>li');



   clickDashboardDropdownBtn() {
      this.getDashboardDropdownBtn().realHover().click('right');
      return this;
   }

   getDashboardDropdownMenuItems() {
         return  this.getDashboardDropdownMenuItemsList();
   }

}
export default DashboardBradcrumbs;
