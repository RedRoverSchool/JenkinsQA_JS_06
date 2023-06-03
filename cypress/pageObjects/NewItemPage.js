import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import JobConfigurePage from "./JobConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');
    getNewItemNames = () => cy.get('.label');
    getMultiConfigurationProjectBtn = () =>
    cy.get(".hudson_matrix_MatrixProject");


    typeNewItemNameInputField(name) {
        this.getNewItemNameInputField().clear().type(name);
        return this;
    };

    selectMultibranchPipelineItem() {
        this.getMultibranchPipelineItem().click();
        return this;
    };

    clickOkBtnAndGoMultiPipelineConfig() {
        this.getNewItemOkBtn().click();
        return new MultibranchPipelineConfigurePage();
    };

    getNewItemNamesList() {
        return this.getNewItemNames().then($els => {
            return Cypress.$.makeArray($els).map($el => $el.innerText)
        });
    };

    clickMultiConfigurationProjectBtn() {
        this.getMultiConfigurationProjectBtn().click();
        return this;
      }

      clickOkButton() {
        this.getNewItemOkBtn().click();
        return new JobConfigurePage();
      }
}

export default NewItemPage;
