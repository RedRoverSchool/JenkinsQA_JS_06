import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');


    typeNewItemNameInputField(name) {
        this.getNewItemNameInputField().clear().type(name);
        return this;
    };

    clickMultibranchPipelineItem() {
        this.getMultibranchPipelineItem().click();
        return this;
    };

    clickCreateMultibranchPipelineOkBtn() {
        this.getNewItemOkBtn().click();
        return new MultibranchPipelineConfigurePage();
    };
}

export default NewItemPage;
