import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');
    getMultibranchlineItem2 = () => cy.get('span').contains('Multibranch Pipeline');


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
        clickMultibranchPipeLine2() {
            this.getMultibranchlineItem2().click();
            return this;
        }
    };
    

export default NewItemPage;
