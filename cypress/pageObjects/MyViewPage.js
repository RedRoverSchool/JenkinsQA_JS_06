import NewItemPage from './NewItemPage';
import PipelinePage from "./PipelinePage";
import FreestyleProjectPage from './FreestyleProjectPage';
import MultiConfigurationProjectPage from './MultiConfigurationProjectPage';
import FolderPage from './FolderPage';

class MyViewPage {
  getNewItemSideMenuLink = () => cy.get('a[href$="my-views/view/all/newJob"]');
  getBreadcrumbMyViewsItem = () => cy.get('li:nth-child(5) a:nth-child(1)');
  getPipelineNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getFreestyleProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getMultiConfigurationProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getFolderNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');

  clickNewItemSideMenuLink() {
    this.getNewItemSideMenuLink().click();
    return new NewItemPage();
  };

  clickPipelineNameLink(){
    this.getPipelineNameLink().click()
    return new PipelinePage();
};

clickFreestyleProjectNameLink(){
  this.getFreestyleProjectNameLink().click()
  return new FreestyleProjectPage();
};

clickMultiConfigurationProjectNameLink(){
  this.getMultiConfigurationProjectNameLink().click()
  return new MultiConfigurationProjectPage();
};

clickFolderNameLink(){
  this.getFolderNameLink().click()
  return new FolderPage();
};
}
export default MyViewPage;