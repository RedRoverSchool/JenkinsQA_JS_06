import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import MyViewPage from "./MyViewPage";
import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";
import OrgFolderPage from "./OrgFolderPage";
import homePage from "../fixtures/pom_fixtures/homePage.json"

class HomePage {
    getHomepageHeader = () => cy.get('.empty-state-block h1'); 
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
    getNewItemSideMenuLink = () => cy.get('a[href="/view/all/newJob"]');
    getMyViewSideMenuLink = () => cy.get('a[href$="my-views"]');
    getCreateJobLink = () => cy.get('a[href="newJob"]');
    getProjectNameLink = () => cy.get('a[href*="job/"]');
    getPageBody = () => cy.get("#page-body");
    getMainPanel = () => cy.get('#main-panel');
    getPipelineTitleLink = () => cy.get('table tr[id="job_Pipeline Job"] a[href="job/Pipeline%20Job/"]');
    getPipelineTitleBtn = () => cy.get('table tr[id="job_Pipeline Job"] a[href="job/Pipeline%20Job/"] button');
    getPipelineTitleDeleteOption = () => cy.get('ul.first-of-type li').contains('Delete Pipeline')
   
    

  clickPeopleSideMenuLink() {
    this.getPeopleSideMenuLink().click();
    return new PeoplePage();
  }

  clickNewItemSideMenuLink() {
    this.getNewItemSideMenuLink().click();
    return new NewItemPage();
  }

  clickMyViewSideMenuLink() {
    this.getMyViewSideMenuLink().click();
    return new MyViewPage();
  }

  clickCreateJobLink() {
    this.getCreateJobLink().click();
    return new NewItemPage();
  }

  clickMultiConfigProjectNameLink(projectName) {
    this.getProjectNameLink().contains(projectName).click();
    return new MultiConfigurationProjectPage();
  }

  clickOrgFolderNameLink(projectName) {
    this.getProjectNameLink().contains(projectName).click();
    return new OrgFolderPage();
  }
  clickPipelineTitleLink() {
    this.getPipelineTitleLink().realHover();
    return this;
  }
  clickPipelineTitleBtn() {
    this.getPipelineTitleBtn().click();
    return this;
  }
  selectPipelineTitleDeleteOption(){
    this.getPipelineTitleDeleteOption().click
    return this;
  }
  confirmPiplineDeletion(){
    cy.on('window:confirm', (str) => {
      expect(str).to.equal(homePage.deletePipelineConfirmText)      
  })
  return this
  }
}
export default HomePage;
