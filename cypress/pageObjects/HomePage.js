const dayjs = require('dayjs');

import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import MyViewPage from "./MyViewPage";
import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";
import OrgFolderPage from "./OrgFolderPage";
import MultibranchPipelineDeletePage from "./MultibranchPipelineDeletePage";
import ResultSearchBoxPage from "./ResultSearchBoxPage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";
import FoldersAndMultibrPipelineDeletePage from "./FoldersAndMultibrPipelineDeletePage";
import BuildHistoryPage from "./BuildHistoryPage";
import MultiConfProjectRenamePage from "./MultiConfProjectRenamePage";
import FreestyleProjectPage from "./FreestyleProjectPage";

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
    getProjectTable = () => cy.get("table#projectstatus");
    getDeleteFoldersAndMultiBrPipelineLink = () => cy.get('a[href*="/delete"]');
    getAddDescriptionBtn = () => cy.get("a#description-link");
    getScheduleBuildBtn = () => cy.get('td:last-child [tooltip]');
    getBuildHistoryLink = () => cy.get('[href="/view/all/builds"]');
    getAddDescriptionLink = () => cy.get('#description-link');
    getAddDescriptionField = () => cy.get('.jenkins-input ');
    getSaveDescriptionBtn = () => cy.get('button[name="Submit"]');
    getSavedDescriptionField = () => cy.get('#description');
    getRenameMultiConfProjectDrpDwnMenuBtn = () => cy.get("#breadcrumb-menu li:nth-child(6) span");
    getNamesProjects = () => cy.get('.jenkins-table__link span');

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

  clickDeleteFoldersAndMultiBrPipelineFromDrpDwnMenu() {
    this.getDeleteFoldersAndMultiBrPipelineLink().click();
    return new FoldersAndMultibrPipelineDeletePage();
  }


  clickAddDescriptionBtn() {
    this.getAddDescriptionBtn().click();
    return this;
  }

  clickScheduleBuildBtn() {
    return this.getScheduleBuildBtn().click();
  }

  getTimeBuildCreating() {
    let timeBuildCreating;
    return timeBuildCreating = dayjs().format('ddd, DD MMM YYYY HH:mm');
  }

  clickBuildHistoryLink() {
    this.getBuildHistoryLink().click();
    return new BuildHistoryPage;

  }

  clickAddDescriptionLink() {
    this.getAddDescriptionLink().click();
    return this;
  }

  typeDescriptionIntoField(text){
    this.getAddDescriptionField().clear().type(text);
    return this;
  }

  clickSaveDescriptionBtn(){
    this.getSaveDescriptionBtn().click();
    return this;
  }

  selectRenameMultiConfProjectDrpDwnMenuBtn() {
    this.getRenameMultiConfProjectDrpDwnMenuBtn().click();
    return new MultiConfProjectRenamePage();
  }

  clickNamesProjects() {
    this.getNamesProjects().click()
    return new FreestyleProjectPage()
  }

}

export default HomePage;
