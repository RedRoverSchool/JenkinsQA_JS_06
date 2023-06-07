import MultibranchPipelineConfirmRenamePage from "./MultibranchPipelineConfirmRenamePage";

class MultibranchPipelineRenamePage{
    getMultibranchPipelineRenameBtn = () => cy.get('button[name="Submit"]');

    clickMultibranchPipelineRenameBtn() {
        this. getMultibranchPipelineRenameBtn().click();
        return new MultibranchPipelineConfirmRenamePage();
    };
}
export default MultibranchPipelineRenamePage;