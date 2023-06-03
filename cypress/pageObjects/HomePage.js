import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import JobProfilePage from "./MultiConfigurationProjectConfigurePage";
import { name } from "../fixtures/pom_fixtures/jobConfigurePage.json";

class HomePage {
  getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
  getNewItemSideMenuLink = () => cy.get('a[href="newJob"]');
  getCreateJobLink = () => cy.get('a[href="newJob"]');
  getJobNameLink = () => cy.get(`a[href='job/${name}/']`);
  getPageBody = () => cy.get("#page-body");

  clickPeopleSideMenuLink() {
    this.getPeopleSideMenuLink().click();
    return new PeoplePage();
  }

  clickNewItemSideMenuLink() {
    this.getNewItemSideMenuLink().click();
    return new NewItemPage();
  }

  clickCreateJobLink() {
    this.getCreateJobLink().click();
    return new NewItemPage();
  }

  clickJobNameLink() {
    this.getJobNameLink().click();
    return new JobProfilePage();
  }

  getPagesBody() {
    return this.getPageBody();
  }
}
export default HomePage;
