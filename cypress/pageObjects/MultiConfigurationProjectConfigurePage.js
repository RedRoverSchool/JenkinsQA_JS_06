import MultiConfigurationProjectConfigurePage from "./MultiConfigurationProjectPage";

class JobConfigurePage {
  getSaveButton = () => cy.get("button[name='Submit']");

  clickSaveButton() {
    this.getSaveButton().click();
    return new MultiConfigurationProjectConfigurePage();
  }
}
export default JobConfigurePage;
