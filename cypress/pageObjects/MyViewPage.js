import NewItemPage from './NewItemPage';
import PipelinePage from "./PipelinePage";
import FreestyleProjectPage from './FreestyleProjectPage';
import MultiConfigurationProjectPage from './MultiConfigurationProjectPage';
import FolderPage from './FolderPage';
import MultibranchPipelinePage from './MultibranchPipelinePage';
import NewViewPage from './NewViewPage';
import myView from '../fixtures/pom_fixtures/myView.json';
import OrgFolderPage from './OrgFolderPage';
import newItemPageData from "../fixtures/pom_fixtures/newItemPage.json";
class MyViewPage {
  getNewItemSideMenuLink = () => cy.get('a[href$="my-views/view/all/newJob"]');
  getBreadcrumbMyViewsItem = () => cy.get('li:nth-child(5) a:nth-child(1)');
  getPipelineNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getFreestyleProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getDashboardMyViewsLink = () => cy.get('#breadcrumbBar a[href="/user/admin/my-views/"]');
  getMultiConfigurationProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getFolderNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getMultiBranchPipelineNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getAddNewViewLink = () => cy.get('a[href$="/newView"]');
  getOrgFolderNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getAddDescriptionBtn = () => cy.get('#description-link');
  getInputDescriptionField = () => cy.get('.jenkins-input');
  getDescriprionSaveBtn = () => cy.get('button[name="Submit"]');
  getDescriptionText = () => cy.get('#description>div:nth-child(1)');
  getJobNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getSortNameArrow = () => cy.get('a.sortheader').contains('Name');

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

clickMultiBranchPipelineNameLink(){
  this.getMultiBranchPipelineNameLink().click()
  return new MultibranchPipelinePage();
};

  verifyAndClickAddNewViewLink() {
    this.getAddNewViewLink()
    .should('be.visible').click();
    cy.url().should('contain', myView.newViewPageURL);
    return new NewViewPage();
  };

  clickOrgFolderNameLink(){
    this.getOrgFolderNameLink().click()
    return new OrgFolderPage();
  }; 

  clickAddDescriptionBtn() {
    this.getAddDescriptionBtn().click();
    return this;
  };

  typeDescriptionIntoInputField(description) {
    this.getInputDescriptionField()
      .should('be.visible')
      .clear()
      .type(description);
    this.getDescriprionSaveBtn().click();
    return this;
  };

  clickSortNameArrow(){
    this.getSortNameArrow().click()
    return this;
  };

  verifyJobNameLinksAsc(){
    this.getJobNameLink()
    .should('have.length', 3)
    .each(($el, idx) => {
      expect($el.text()).to.be.equal(newItemPageData.itemsNamesAsc[idx]);
    });
  };

  verifyJobNameLinksDesk(){
    this.getJobNameLink()
    .should('have.length', 3)
    .each(($el, idx) => {
      expect($el.text()).to.be.equal(newItemPageData.itemsNamesDesc[idx]);
    });
  };
}
export default MyViewPage;