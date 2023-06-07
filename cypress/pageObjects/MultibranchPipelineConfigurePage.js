import MultibranchPipelinePage from "./MultibranchPipelinePage";

class MultibranchPipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');
    getAppearanceBtn = () => cy.get('#side-panel #tasks button[data-section-id="appearance"]');
    getIconDrpDwn = () => cy.get('.jenkins-form-item.has-help > .jenkins-select select');
    getDisableBtn = () => cy.get('#toggle-switch-enable-disable-project');

    clickSaveBtnAndGoMultiPipeline() {
        this.getProjectConfigSaveBtn().click();
        return new MultibranchPipelinePage();
    };

    clickHealthMetricsBtn() {
        this.getHealthMetricsBtn().click();
        return this;
    };

    clickAppearanceBtn() {
        this.getAppearanceBtn().click();
        return this;
    };

    selectIconDrpDwn(iconType) {
        this.getIconDrpDwn().select(iconType);
        return this;
    };

    clickDisableBtn() {
        this.getDisableBtn().click();
        return this;
    };
}

export default MultibranchPipelineConfigurePage;
