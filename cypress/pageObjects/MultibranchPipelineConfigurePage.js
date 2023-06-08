import MultibranchPipelinePage from "./MultibranchPipelinePage";
import {addSourceItemsList, intervalTimeItemsList} from "../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";
import multibranchPipline from "../fixtures/multibranchPipeline.json";

class MultibranchPipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');
    getAppearanceBtn = () => cy.get('#side-panel #tasks button[data-section-id="appearance"]');
    getIconDrpDwn = () => cy.get('.jenkins-form-item.has-help > .jenkins-select select');
    getAddSourceBtn = () => cy.get('#yui-gen1-button')
    getAddSourceDrDwnItemsList = () => cy.get('#yui-gen2 li')
    getDisableBtn = () => cy.get('#toggle-switch-enable-disable-project');
    getIntervalDrDwnList = () => cy.get('select[value="1d"] option')

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

    hoverClickAddSource() {
        this.getAddSourceBtn().realHover().click();
        return this;
    }

    createAddSourceItemList() {
        return this.getAddSourceDrDwnItemsList()
            .should('have.length', addSourceItemsList.length)
            .then($els => {
                return Cypress._.map($els, 'innerText')
            });
    }

    clickDisableBtn() {
        this.getDisableBtn().click();
        return this;
    };

    createIntervalDrDwnItemList(){
        return this.getIntervalDrDwnList()
            .should('have.length', intervalTimeItemsList.length)
            .then($els => {
                return Cypress._.map($els, 'innerText')
             })
    }
}

export default MultibranchPipelineConfigurePage;
