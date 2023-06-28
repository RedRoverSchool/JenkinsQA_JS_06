import NewItemPage from './NewItemPage';
import PipelinePage from "./PipelinePage";
import FreestyleProjectPage from './FreestyleProjectPage';
import MultiConfigurationProjectPage from './MultiConfigurationProjectPage';
import FolderPage from './FolderPage';
import MultibranchPipelinePage from './MultibranchPipelinePage';
import NewViewPage from './NewViewPage';
import myView from '../fixtures/pom_fixtures/myView.json';
import OrgFolderPage from './OrgFolderPage';
import newItemPageData from '../fixtures/pom_fixtures/newItemPage.json';
import myViewData from '../fixtures/pom_fixtures/myView.json';

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
  getJobNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getSortNameArrow = () => cy.get('a.sortheader').contains('Name');
  getAddDescriptionBtn = () => cy.get('#description-link');
  getInputDescriptionField = () => cy.get('.jenkins-input');
  getDescriprionSaveBtn = () => cy.get('button[name="Submit"]');
  getDescriptionText = () => cy.get('#description>div:nth-child(1)');
  getEditDescriptionLink = () => cy.get('#description-link');
  getBuildstatusIcon = () => cy.get('.build-status-icon__outer');
  getNotBuiltTooltip = () => cy.get('svg[tooltip="Not built"]');
  getLastSuccesStatus = () => cy.get('td:nth-child(4)');
  getLastFalureStatus = () => cy.get('td:nth-child(5)');
  getLastDurationStatus = () => cy.get('td:nth-child(6)');
  getSceduleBuidBtn = () => cy.get('td:nth-child(7)');
  getScheduleBuidTooltip = () => cy.get('a[tooltip*="Schedule a Build"]');
  getEditDescriptionLink = () => cy.get('#description-link');
  getActiveTabViewInTabBar = () => cy.get('.tabBar .tab.active');
  getViewsTabBar = () => cy.get('.tabBar');
  getCreateAJobLink = () => cy.get('a[href="newJob"]');
  
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
    this.getAddNewViewLink().should('be.visible').click();
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

  clickEditDescriptionLink() {
    this.getEditDescriptionLink().click();
    return this;
  };

  triggerBuildstatusIcon(){
    this.getBuildstatusIcon().trigger('focus');
    return this;
  };  

  assertNotBuiltTooltip(){
    this.getNotBuiltTooltip().should('be.visible');
    return this;
  };  

  assertLastSuccesStatus(){
    this.getLastSuccesStatus().should('contain', myViewData.cellData);
    return this;
  }; 

  assertLastFalureStatus(){
    this.getLastFalureStatus().should('contain', myViewData.cellData);
    return this;
  }; 

  assertLastDurationStatus(){
    this.getLastDurationStatus().should('contain', myViewData.cellData);
    return this;
  }; 

   triggerSceduleBuidBtn(){
    this.getSceduleBuidBtn().trigger('focus');
    return this;
  };  

  assertAndClickScheduleBuidTooltip(){
    this.getScheduleBuidTooltip().should('be.visible').click().wait(2000);
    return this;
   }; 
  
  clickEditDescriptionLink() {
    this.getEditDescriptionLink().click();
    return this;
  };

  clickNewViewBtn() {
    this.getAddNewViewLink().click()
    return this;
  }

  verifyTabAllViewsInTabBarIsActive() {
    this.getActiveTabViewInTabBar()
      .should('have.text', myView.viewsTabBar.tabAllViewsInTabBar)
      .and('have.css', 'color', myView.viewsTabBar.activeTabViewColor)
      .and('have.css', 'background-color', myView.viewsTabBar.activeTabViewBackgroundColor);
    return this;
  };

  clickCreateAJobLink() {
    this.getCreateAJobLink().click();
    return new NewItemPage();
  }

  // clickgetMyViewsAll() {
  //   this.getMyViewsAll().click();
  //   return new page MyViewsAll

  }
 

export default MyViewPage;