import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import MultiConfigurationProjectConfigurePage from "./MultiConfigurationProjectConfigurePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getFreestyleProjectItem = () => cy.get('li[class$="FreeStyleProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');
    getNewItemNames = () => cy.get('.label');
    getMultiConfigurationProjectItem = () => cy.get(".hudson_matrix_MatrixProject");


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

    selectMultiConfigurationProjectItem() {
        this.getMultiConfigurationProjectItem().click();
        return this;
      }

      clickOkBtnAndGoMultiConfProjectConfig() {
        this.getNewItemOkBtn().click();
        return new MultiConfigurationProjectConfigurePage();
      }
    selectFreestyleProjectItem() {
        this.getFreestyleProjectItem().click();
        return this;
    };

    clickOkBtnAndGoFreestyleProjectConfig() {
        this.getNewItemOkBtn().click();
        return new FreestyleProjectConfigurePage();
    };
}

export default NewItemPage;
