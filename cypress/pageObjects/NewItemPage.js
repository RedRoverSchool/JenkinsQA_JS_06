import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getFreestyleProjectItem = () => cy.get('li[class$="hudson_model_FreeStyleProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');
    getNewItemNames = () => cy.get('.label');
    getFreestyleProjectItem = () => cy.get('li[class$="FreeStyleProject"]');


    typeNewItemNameInputField(name) {
        this.getNewItemNameInputField().clear().type(name);
        return this;
    };

    selectMultibranchPipelineItem() {
        this.getMultibranchPipelineItem().click();
        return this;
    };

    selectFreestyleProjectItem() {
        this.getFreestyleProjectItem().click();
        return this;
    };

    clickOkBtnAndGoMultiPipelineConfig() {
        this.getNewItemOkBtn().click();
        return new MultibranchPipelineConfigurePage();
    };

    clickOkBtnAndGoFreestyleProjectConfig() {
        this.getNewItemOkBtn().click();
        return new FreestyleProjectConfigurePage();
    };

    getNewItemNamesList() {
        return this.getNewItemNames().then($els => {
            return Cypress.$.makeArray($els).map($el => $el.innerText)
        });
    };

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
