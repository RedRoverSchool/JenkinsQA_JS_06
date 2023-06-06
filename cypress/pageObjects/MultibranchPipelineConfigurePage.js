import MultibranchPipelinePage from "./MultibranchPipelinePage";
import {addSourceItemsList} from "../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";

class MultibranchPipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');
    getAppearanceBtn = () => cy.get('#side-panel #tasks button[data-section-id="appearance"]');
    getIconDrpDwn = () => cy.get('.jenkins-form-item.has-help > .jenkins-select select');
    getAddSourceBtn = () => cy.get('#yui-gen1-button')
    getAddSourceDrDwnItemsList = () => cy.get('#yui-gen2 li')

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
}

export default MultibranchPipelineConfigurePage;
