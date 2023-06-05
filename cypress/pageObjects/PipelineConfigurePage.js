import PipelinePage from "./PipelinePage";

class PipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name="Submit"]');
  
    clickSaveBtnAndGoPipeline() {
        this.getProjectConfigSaveBtn().click();
        return new PipelinePage();
    };
}
export default PipelineConfigurePage;
