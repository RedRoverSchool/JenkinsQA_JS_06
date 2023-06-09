import MultibranchPipelineConfirmRenamePage from "./MultibranchPipelineConfirmRenamePage";
import MultibranchPipelinePage from "./MultibranchPipelinePage";

class MultibranchPipelineRenamePage{
    getMultibranchPipelineRenameBtn = () => cy.get('button[name="Submit"]');
    getInputField = () => cy.get('input[name="newName"]');

    clickMultibranchPipelineRenameBtn() {
        this. getMultibranchPipelineRenameBtn().click();
        return new MultibranchPipelineConfirmRenamePage();
    };

    clearAndTypeNewPiplineName(piplineName) {
        this. getInputField().clear();
        this. getInputField().type(piplineName);
        return this;
    };

    clickRenameSubmitBtn(){
        this. getMultibranchPipelineRenameBtn().click();
        return new MultibranchPipelinePage();

    }
}
export default MultibranchPipelineRenamePage;