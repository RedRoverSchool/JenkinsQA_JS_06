import MultibranchPipelinePage from "./MultibranchPipelinePage";
import multibranchPipelineConfigurePage from "../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";

class MultibranchPipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');
    getAppearanceBtn = () => cy.get('#side-panel #tasks button[data-section-id="appearance"]');
    getIconDrpDwn = () => cy.get('.jenkins-form-item.has-help > .jenkins-select select');
    getDisableBtn = () => cy.get('#toggle-switch-enable-disable-project');
    getPeriodicallyCheckBox = () => cy.get('div[ref="cb2"] .jenkins-checkbox');
    getTriggersIntervalDropdown = () => cy.get('select[value="1d"] option');

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

    clickPeriodicallyCheckBox() {
        this.getPeriodicallyCheckBox().click();
        return this;
    }

    createTriggersIntervalDrDwnOptionList() {
        return this.getTriggersIntervalDropdown()
            .should('have.length', multibranchPipelineConfigurePage.intervalTime.length)
            .then($els => {
                return Cypress._.map($els, 'innerText')
            })
    }
}

export default MultibranchPipelineConfigurePage;
