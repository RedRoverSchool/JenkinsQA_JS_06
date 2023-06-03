import HomePage from "../pageObjects/HomePage";
import JobConfigurePage from "../pageObjects/JobConfigurePage";

class JobProfilePage {
  getDeleteLink = () => cy.get('a[data-message^="Delete"]');

  clickDeleteLink() {
    this.getDeleteLink().click();
    return new HomePage();
  }
}
export default JobProfilePage;
