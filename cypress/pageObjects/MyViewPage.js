import NewItemPage from './NewItemPage';
import DashboardBradcrumbs from "./DashboardBradcrumbs"
import PipelinePage from "./PipelinePage";


class MyViewPage {
  getNewItemSideMenuLink = () => cy.get('a[href$="my-views/view/all/newJob"]');
  getBreadcrumbMyViewsItem = () => cy.get('li:nth-child(5) a:nth-child(1)');
  getPipelineNameLink = () =>  cy.get('a[href="job/testPipeline/"]');


  clickNewItemSideMenuLink() {
    this.getNewItemSideMenuLink().click();
    return new NewItemPage();
  };

  clickPipelineNameLink(){
    this.getProjectNameLink().click()
    return new PipelinePage();
};

}
export default MyViewPage;