import JobConfigurePage from "../pageObjects/JobConfigurePage";

class NewJobPage {
  getItemNameInputField = () => cy.get("input#name");
  getMultiConfigurationProjectBtn = () =>
    cy.get(".hudson_matrix_MatrixProject");
  getOkButton = () => cy.get("#ok-button");

  typeItemNameInputField(name) {
    this.getItemNameInputField().clear().type(name);
    return this;
  }

  clickMultiConfigurationProjectBtn() {
    this.getMultiConfigurationProjectBtn().click();
    return this;
  }

  clickOkButton() {
    this.getOkButton().click();
    return new JobConfigurePage();
  }
}

export default NewJobPage;
