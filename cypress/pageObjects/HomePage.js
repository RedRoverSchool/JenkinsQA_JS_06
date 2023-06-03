import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import JobProfilePage from "./MultiConfigurationProjectConfigurePage";

class HomePage {
  getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
  getNewItemSideMenuLink = () => cy.get('a[href="newJob"]');
  getCreateJobLink = () => cy.get('a[href="newJob"]');
  getProjectNameLink = () => cy.get('a[href*="job/"]');
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

  clickProjectNameLink(name) {
    this.getProjectNameLink().contains(name).click();
    return new JobProfilePage();
  }

  getPagesBody() {
    return this.getPageBody();
  }
}
export default HomePage;
