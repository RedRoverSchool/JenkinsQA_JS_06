import PipelinePage from "./PipelinePage"
class PipelineProjectRenamePage {
    getPipelineProjectNameInputField = () => cy.get('input[name="newName"]');
    getPipelineProjectRenameBtn = () => cy.get('button[name=Submit]'); 
    
    typePipelineProjectNameInputField(name) {
        this.getPipelineProjectNameInputField().clear().type(name);
        return this   
    }
    clickPipelineProjectRenameBtn() {
        this.getPipelineProjectRenameBtn().click();
        return new PipelinePage();
    }
}


export default PipelineProjectRenamePage