import NewItemPage from './NewItemPage';
import PipelinePage from "./PipelinePage";
import FreestyleProjectPage from './FreestyleProjectPage';
import MultiConfigurationProjectPage from './MultiConfigurationProjectPage';
import NewViewPage from './NewViewPage';
import myView from '../fixtures/pom_fixtures/myView.json';

class MyViewPage {
  getNewItemSideMenuLink = () => cy.get('a[href$="my-views/view/all/newJob"]');
  getBreadcrumbMyViewsItem = () => cy.get('li:nth-child(5) a:nth-child(1)');
  getPipelineNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getFreestyleProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getMultiConfigurationProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getAddNewViewLink = () => cy.get('a[href$="/newView"]');

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

  verifyAndClickAddNewViewLink() {
    this.getAddNewViewLink()
    .should('be.visible').click();
    cy.url().should('contain', myView.newViewPageURL);
    return new NewViewPage();
  };
}
export default MyViewPage;