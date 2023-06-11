import PipelinePage from "./PipelinePage";
import pipelineConfigurePageData from "../fixtures/pom_fixtures/pipelineConfigurePage.json";

class PipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name="Submit"]');
    getDescriptionTextarea = () => cy.get('textarea[name = "description"]');
  
    clickSaveBtnAndGoPipeline() {
        this.getProjectConfigSaveBtn().click();
        return new PipelinePage();
    };

    typeDescriptionOnPiplineConfigPage(){
        this.getDescriptionTextarea().type(pipelineConfigurePageData.firstDescription)
        return this;
    };
}
export default PipelineConfigurePage;
