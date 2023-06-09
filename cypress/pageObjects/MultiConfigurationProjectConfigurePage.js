import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";

class MultiConfigurationProjectConfigurePage {
  getSaveButton = () => cy.get("button[name='Submit']");
  getAdvancedBtn = () => cy.get('#advanced-project-options+div button');  
  getQuietPeriodCheckBox = () => cy.get('#cb9+.attach-previous');
  getNumberOfSecondsText = () => cy.get('div[class="form-container tr"] .jenkins-form-description');
  getNumberOfSecondsInput = () => cy.get('div[class="form-container tr"] .jenkins-input');

  clickSaveButton() {
    this.getSaveButton().click();
    return new MultiConfigurationProjectPage();
  }

  clickAdvancedBtn() {
    this.getAdvancedBtn().click()
    return this;
  }

  clickQuietPeriodCheckBox() {
    this.getQuietPeriodCheckBox().click()
    return this;
  }
}
export default MultiConfigurationProjectConfigurePage;
