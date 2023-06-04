import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";

class MultiConfigurationProjectConfigurePage {
  getSaveButton = () => cy.get("button[name='Submit']");

  clickSaveButton() {
    this.getSaveButton().click();
    return new MultiConfigurationProjectPage();
  }
}
export default MultiConfigurationProjectConfigurePage;
