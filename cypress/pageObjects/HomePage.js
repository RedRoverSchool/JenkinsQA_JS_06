import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import MyViewPage from "./MyViewPage";
import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";
import OrgFolderPage from "./OrgFolderPage";
import MultibranchPipelineDeletePage from "./MultibranchPipelineDeletePage";
import ResultSearchBoxPage from "./ResultSearchBoxPage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";

class HomePage {
    getHomepageHeader = () => cy.get('.empty-state-block h1'); 
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
    getNewItemSideMenuLink = () => cy.get('a[href="/view/all/newJob"]');
    getMyViewSideMenuLink = () => cy.get('a[href$="my-views"]');
    getCreateJobLink = () => cy.get('a[href="newJob"]');
    getProjectNameLink = () => cy.get('td>a[href*="job/"]');
    getPageBody = () => cy.get("#page-body");
    getMainPanel = () => cy.get('#main-panel');
    getProjectDrpDwnBtn = () => cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron');
    getDeleteMultiBrPipelineLink = () => cy.get('a[href*="/delete"]');
    getSearchBox = () => cy.get('#search-box');
    getDeleteMultiConfProjectDrpDwnMenuBtn = () => cy.get("#breadcrumb-menu li:nth-child(5) span");
    getProjectNameDropdown = () => cy.get('.jenkins-table__link .jenkins-menu-dropdown-chevron');
    getProjectNameDropdownList = () => cy.get('#breadcrumb-menu');
    getProjectNameDropdownConfigureLink = () => cy.get('[href*="configure"]');

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

  hoverProjectNameLink() {
    this.getProjectNameLink().realHover();
    return this;
  }

  clickProjectDrpDwnBtn() {
    this.getProjectDrpDwnBtn().click({force: true});
    return this;
  }

  clickDeleteMultiBrPipelineFromDrpDwnMenu() {
    this.getDeleteMultiBrPipelineLink().click();
    return new MultibranchPipelineDeletePage();
  }

  typeIntoSearchBox(name) {
    this.getSearchBox().type(name + '{enter}');
    return new ResultSearchBoxPage();
  }

  selectDeleteMultiConfProjectDrpDwnMenuBtn() {
    this.getDeleteMultiConfProjectDrpDwnMenuBtn().click();
    return this;
  }

  clickProjectNameDropdown() {
    this.getProjectNameDropdown().click({force : true});
    return this;
  }

  clickProjectNameDropdownConfigureLink() {
    this.getProjectNameDropdownConfigureLink().click();
    return new FreestyleProjectConfigurePage();
  }

  clickProjectDrpDwnBtn(projectName) {
    this.getProjectNameLink().contains(projectName).realHover();
    this.getProjectDrpDwnBtn().click();
    return this;
  }
}

export default HomePage;
