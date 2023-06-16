import MultibranchPipelinePage from "./MultibranchPipelinePage";
import {addSourceItemsList, intervalTimeItemsList, PeriodicallyQstMarkText} from "../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";


class MultibranchPipelineConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getHealthMetricsBtn = () => cy.get('.advancedButton');
    getAddMetricBtn = () => cy.get('#yui-gen3-button');
    getAppearanceBtn = () => cy.get('#side-panel #tasks button[data-section-id="appearance"]');
    getIconDrpDwn = () => cy.get('.jenkins-form-item.has-help > .jenkins-select select');
    getAddSourceBtn = () => cy.get('#yui-gen1-button')
    getAddSourceDrDwnItemsList = () => cy.get('#yui-gen2 li')
    getDisableBtn = () => cy.get('#toggle-switch-enable-disable-project');
    getPeriodicallyPopUpQstMark = () => cy.get('#tippy-4 div.tippy-box div.tippy-content')
    getPeriodicallyQuestionMark = () => cy.get('.optionalBlock-container a:nth-child(2)')
    getPeriodicallyHelpText1 = () => cy.get('div[class="help"] div p:nth-child(1)')
    getIntervalDrDwnList = () => cy.get('select[value="1d"] option')
    getScanTriggersCheckbox = () => cy.get('#cb2');
    getCheckbox = () =>cy.get('[type="checkbox"]');


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

    checkPeriodicallyPopUpQstMarkText() {
        this.getPeriodicallyQuestionMark()
            .trigger('focus')
        this.getPeriodicallyPopUpQstMark()
            .should('have.text', PeriodicallyQstMarkText)
            .and('be.visible')
        return this;
    }

    clickPeriodicallyQuestionMark() {
        this.getPeriodicallyQuestionMark()
            .click()
        return this;
    }

    checkPeriodicallyHelpText1Visible() {
        this.getPeriodicallyHelpText1()
        .should('be.visible')
        return this;
    }

    createIntervalDrDwnItemList(){
        return this.getIntervalDrDwnList()
            .should('have.length', intervalTimeItemsList.length)
            .then($els => {
                return Cypress._.map($els, 'innerText')
             })
    }

    hoverScanTriggerCheckbox(){
        return this.getScanTriggersCheckbox().realHover();
    };
}

export default MultibranchPipelineConfigurePage;
