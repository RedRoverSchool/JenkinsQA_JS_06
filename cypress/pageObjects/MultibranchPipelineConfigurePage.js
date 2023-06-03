import MultibranchPipelinePage from "./MultibranchPipelinePage";

class MultibranchPipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');


    clickSaveBtnAndGoMultiPipeline() {
        this.getProjectConfigSaveBtn().click();
        return new MultibranchPipelinePage();
    };

    clickHealthMetricsBtn() {
        this.getHealthMetricsBtn().click();
        return this;
    };
}

export default MultibranchPipelineConfigurePage;
