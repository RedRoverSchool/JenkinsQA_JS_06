import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";
import PipelineConfigurePage from "./PipelneConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getFreestyleProjectItem = () => cy.get('li[class$="FreeStyleProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');
    getNewItemNames = () => cy.get('.label');
    getPipelineItem = () => cy.get('ul .org_jenkinsci_plugins_workflow_job_WorkflowJob');
        
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

    selectFreestyleProjectItem() {
        this.getFreestyleProjectItem().click();
        return this;
    };

    clickOkBtnAndGoFreestyleProjectConfig() {
        this.getNewItemOkBtn().click();
        return new FreestyleProjectConfigurePage();
    };

    selectPipelineItem() {
        this.getPipelineItem().click();
        return this;
    };

    clickNewItemOkBtn() {
        this.getNewItemOkBtn().click()
        return new PipelineConfigurePage();
    };
        
}
export default NewItemPage;
