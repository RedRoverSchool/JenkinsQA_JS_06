import PipelinePage from "./PipelinePage";

class PipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');
    getSaveBtn = () => cy.get('.jenkins-button--primary')

    clickSaveBtnAndGoMultiPipeline() {
        this.getProjectConfigSaveBtn().click();
        return new MultibranchPipelinePage();
    };

    clickHealthMetricsBtn() {
        this.getHealthMetricsBtn().click();
        return this;
    };

    clickSaveBtn() {
        this.getSaveBtn().click()
        return new PipelinePage();
    }

}

export default PipelineConfigurePage;
