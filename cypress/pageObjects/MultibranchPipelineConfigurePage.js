import MultibranchPipelinePage from "./MultibranchPipelinePage";

class MultibranchPipelineConfigurePage {
    getMultibranchPipelineConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');


    clickMultibranchPipelineConfigSaveBtn() {
        this.getMultibranchPipelineConfigSaveBtn().click();
        return new MultibranchPipelinePage();
    };

    clickHealthMetricsBtn() {
        this.getHealthMetricsBtn().click();
        return this;
    };
}

export default MultibranchPipelineConfigurePage;
