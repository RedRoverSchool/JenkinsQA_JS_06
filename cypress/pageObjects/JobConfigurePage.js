import JobProfilePage from "../pageObjects/JobProfilePage";
import HomePage from "../pageObjects/HomePage";

class JobConfigurePage {
  getSaveButton = () => cy.get("button[name='Submit']");
  getDeleteLink = () => cy.get('a[data-message^="Delete"]');

  clickSaveButton() {
    this.getSaveButton().click();
    return new JobProfilePage();
  }

  clickDeleteLink() {
    this.getDeleteLink().click();
    return new HomePage();
  }
}

export default JobConfigurePage;
