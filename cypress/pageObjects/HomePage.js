import MultibranchPipelinePage from "./MultibranchPipelinePage";

const dayjs = require('dayjs');

import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import MyViewPage from "./MyViewPage";
import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";
import OrgFolderPage from "./OrgFolderPage";
import ResultSearchBoxPage from "./ResultSearchBoxPage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";
import FoldersAndMultibrPipelineDeletePage from "./FoldersAndMultibrPipelineDeletePage";
import BuildHistoryPage from "./BuildHistoryPage";
import MultiConfProjectRenamePage from "./MultiConfProjectRenamePage";
import FreestyleProjectPage from "./FreestyleProjectPage";
import PipelineProjectRenamePage from "./PipelineProjectRenamePage";
import FolderPage from "./FolderPage";
import MultibranchPipelineStatusPage from "./MultibranchPipelineStatusPage";
import NewNodePage from "./NewNodePage";
import OrgFolderMoveChoicePage from "./OrgFolderMoveChoicePage";
import PipelineProjectConfigurePage from "./PipelineProjectConfigurePage"
import homePage from "../fixtures/pom_fixtures/homePage.json"

class HomePage {
    getHomepageHeader = () => cy.get('.empty-state-block h1');
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
    getNewItemSideMenuLink = () => cy.get('a[href="/view/all/newJob"]');
    getMyViewSideMenuLink = () => cy.get('a[href$="my-views"]');
    getCreateJobLink = () => cy.get('a[href="newJob"]');
    getProjectNameLink = () => cy.get('td>a[href*="job/"] span');
    getPageBody = () => cy.get("#page-body");
    getMainPanel = () => cy.get('#main-panel');
    getHomePageLink = () => cy.url();
    getProjectDrpDwnBtn = () => cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron');
    getDeleteDrpDwnLink = () => cy.get('ul.first-of-type li').contains('Delete');
    getDeleteMultiConfProjectDrpDwnMenuBtn = () => cy.get("#breadcrumb-menu li:nth-child(5) span");
    getProjectNameDropdownList = () => cy.get('#breadcrumb-menu');
    getProjectNameDropdownConfigureLink = () => cy.get('[href*="configure"]');
    getProjectTable = () => cy.get("table#projectstatus");
    getDeleteFoldersAndMultiBrPipelineLink = () => cy.get('a[href*="/delete"]');
    getScheduleBuildBtn = () => cy.get('td:last-child [tooltip]');
    getBuildHistoryLink = () => cy.get('[href="/view/all/builds"]');
    getAddDescriptionLink = () => cy.get('#description-link');
    getAddDescriptionField = () => cy.get('.jenkins-input ');
    getSaveDescriptionBtn = () => cy.get('button[name="Submit"]');
    getSavedDescriptionField = () => cy.get('#description');
    getRenameMultiConfProjectDrpDwnMenuBtn = () => cy.get("#breadcrumb-menu li:nth-child(6) span");
    getSideMenuPanel = () => cy.get('#tasks .task');
    getRenamePipelineProjectDrpDwnMenuBtn = () => cy.get("#breadcrumb-menu li:nth-child(6) span");
    getAddEditDescriptionBtn = () => cy.get("a#description-link");
    getDescriptionField = () => cy.get('#description div:first-of-type');
    getDescriptionPreviewLink = () => cy.get(".textarea-show-preview");
    getDescriptionPreview = () => cy.get(".textarea-preview");

  getHomepageHeader = () => cy.get(".empty-state-block h1");
  getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
  getNewItemSideMenuLink = () => cy.get('a[href="/view/all/newJob"]');
  getMyViewSideMenuLink = () => cy.get('a[href$="my-views"]');
  getCreateJobLink = () => cy.get('a[href="newJob"]');
  getProjectNameLink = () => cy.get('td>a[href*="job/"] span');
  getPageBody = () => cy.get("#page-body");
  getMainPanel = () => cy.get("#main-panel");
  getProjectDrpDwnBtn = () =>
    cy.get("table#projectstatus button.jenkins-menu-dropdown-chevron");
  getDeleteDrpDwnLink = () => cy.get("ul.first-of-type li").contains("Delete");
  getDeleteMultiConfProjectDrpDwnMenuBtn = () =>
    cy.get("#breadcrumb-menu li:nth-child(5) span");
  getProjectNameDropdownList = () => cy.get("#breadcrumb-menu");
  getProjectNameDropdownConfigureLink = () => cy.get('[href*="configure"]');
  getProjectTable = () => cy.get("table#projectstatus");
  getDeleteFoldersAndMultiBrPipelineLink = () => cy.get('a[href*="/delete"]');
  getScheduleBuildBtn = () => cy.get("td:last-child [tooltip]");
  getBuildHistoryLink = () => cy.get('[href="/view/all/builds"]');
  getAddDescriptionLink = () => cy.get("#description-link");
  getAddDescriptionField = () => cy.get(".jenkins-input ");
  getSaveDescriptionBtn = () => cy.get('button[name="Submit"]');
  getSavedDescriptionField = () => cy.get("#description");
  getRenameMultiConfProjectDrpDwnMenuBtn = () =>
    cy.get("#breadcrumb-menu li:nth-child(6) span");
  getSideMenuPanel = () => cy.get("#tasks .task");
  getRenamePipelineProjectDrpDwnMenuBtn = () =>
    cy.get("#breadcrumb-menu li:nth-child(6) span");
  getAddEditDescriptionBtn = () => cy.get("a#description-link");
  getDescriptionField = () => cy.get("#description div:first-of-type");
  getDescriptionPreviewLink = () => cy.get(".textarea-show-preview");
  getDescriptionPreview = () => cy.get(".textarea-preview");
  getSetUpAgentLink = () =>
    cy.get('a[href="computer/new"] span:not(.trailing-icon)');
  getProjectNameDropdownMoveLink = () => cy.get('a[href$=move]');
  getProjectName = (projectName) => cy.get(`a[href="job/${projectName}/"]`)
  getProjectDrpDwn = (projectName) => cy.get(`#job_${projectName} .jenkins-menu-dropdown-chevron`)
  getPojectStatusTableRow = () => cy.get('table#projectstatus tbody tr')
  getTableSizeBtnS = () => cy.get('[tooltip="Small"]')
  getTableSizeBtnM = () => cy.get('[tooltip="Medium"]')
  getTableSizeBtnL = () => cy.get('[tooltip="Large"]')
  getTable = () => cy.get('#projectstatus')


  clickSideMenuPanelItem(idx) {
    this.getSideMenuPanel().eq(idx).click()
    return cy.url()
  };

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
    this.getProjectDrpDwnBtn().click({ force: true });
    return this;
  }

  typeIntoSearchBox(name) {
    this.getSearchBox().type(name + "{enter}");
    return new ResultSearchBoxPage();
  }

   clickMultibranchPipelineProjectNameLink(projectName) {
      this.getProjectNameLink().contains(projectName).click();
      return new MultibranchPipelinePage();
  }

  hoverAndClickProjectDrpDwnBtn(projectName) {
    this.getProjectNameLink().contains(projectName).realHover();
    this.getProjectDrpDwnBtn().click();
    return this;
  }

  selectDeleteDrpDwnLink() {
    this.getDeleteDrpDwnLink().click();
    return this;
  }

  selectDeleteMultiConfProjectDrpDwnMenuBtn() {
    this.getDeleteMultiConfProjectDrpDwnMenuBtn().click();
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

  clickScheduleBuildBtn() {
    return this.getScheduleBuildBtn().click();
  }

  getTimeBuildCreating() {
    let timeBuildCreating;
    return (timeBuildCreating = dayjs().format("ddd, DD MMM YYYY HH:mm"));
  }

  clickBuildHistoryLink() {
    this.getBuildHistoryLink().click();
    return new BuildHistoryPage();
  }

  clickFolderNameLink(projectName) {
    this.getProjectNameLink().contains(projectName).click();
    return new FolderPage();
  }

  clickAddDescriptionLink() {
    this.getAddDescriptionLink().click();
    return this;
  }

  typeDescriptionIntoField(text) {
    this.getAddDescriptionField().clear().type(text);
    return this;
  }

  clickSaveDescriptionBtn() {
    this.getSaveDescriptionBtn().click();
    return this;
  }

  selectRenameMultiConfProjectDrpDwnMenuBtn() {
    this.getRenameMultiConfProjectDrpDwnMenuBtn().click();
    return new MultiConfProjectRenamePage();
  }

  clickFreestyleProjectNameLink() {
    this.getProjectNameLink().click();
    return new FreestyleProjectPage();
  }

  createSidePanelItemsList() {
    return this.getSideMenuPanel().then(($els) => {
      return Cypress.$.makeArray($els).map(($elem) => $elem.innerText);
    });
  }

  clickOnFolderNameLink() {
    this.getProjectNameLink().click();
    return new FolderPage();
  }

  selectRenamePipelineProjectDrpDwnMenuBtn() {
    this.getRenamePipelineProjectDrpDwnMenuBtn().click();
    return new PipelineProjectRenamePage();
  }

  clickEditDescriptionBtn() {
    this.getAddEditDescriptionBtn().click();
    return this;
  }

  clickProjectNameLink(name) {
    this.getProjectNameLink().contains(name).click();
    return new FolderPage();
  }

  clickMultibranchPipelineNameLink(name) {
    this.getProjectNameLink().contains(name).click();
    return new MultibranchPipelineStatusPage();
  }

  clickDescriptionPreviewLink() {
    this.getDescriptionPreviewLink().click();
    return this;
  }

  clickSetUpAgentLink() {
    this.getSetUpAgentLink().click();
    return new NewNodePage();
  };

  clickProjectNameDropdownMoveLink() {
    this.getProjectNameDropdownMoveLink().click();
    return new OrgFolderMoveChoicePage();
  }

  hoverAndClickProjectDrpDwn(projectName) {
    this.getProjectName(projectName).realHover();
    this.getProjectDrpDwn(projectName).click();
    return this;
  }

  clickProjectName(projectName) {
    this.getProjectName(projectName).click();
    return new FolderPage;
  }

  clickOnScheduleBuildBtn() {
    this.getScheduleBuildBtn().click();
    return this;
  }
  clickPipelineProjectNameDropdownConfigureLink() {
    this.getProjectNameDropdownConfigureLink().click();
    return new PipelineProjectConfigurePage();
  }
  clickScheduleBuildForProjectNameBtn(projectName) {
    this.getPojectStatusTableRow().find(`a[tooltip="Schedule a Build for ${projectName}"]`).click()
    return this
  };

  clickTableSizeBtnS() {
    this.getTableSizeBtnS().click()
    return this
  }

  verifyTableSizeS() {
    this.getTable().then((obj) => {
      cy.document().then(() => {
          cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
          .should('eq', homePage.sRem)
      })
  })
    return this
  }

  clickTableSizeBtnM() {
    this.getTableSizeBtnM().click()
    return this
  }

  verifyTableSizeM() {
    this.getTable().then((obj) => {
      cy.document().then(() => {
          cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
          .should('eq', homePage.mRem)
      })
  })
    return this
  }

  clickTableSizeBtnL() {
    this.getTableSizeBtnL().click()
    return this
  }

  verifyTableSizeL() {
    this.getTable().then((obj) => {
      cy.document().then(() => {
          cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
          .should('eq', homePage.lRem)
      })
  })
    return this
  }

}

export default HomePage;
