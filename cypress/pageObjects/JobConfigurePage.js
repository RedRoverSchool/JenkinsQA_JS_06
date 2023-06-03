import JobProfilePage from "./MultiConfigurationProjectConfigurePage";

class JobConfigurePage {
  getSaveButton = () => cy.get("button[name='Submit']");

  clickSaveButton() {
    this.getSaveButton().click();
    return new JobProfilePage();
  }
}
export default JobConfigurePage;
