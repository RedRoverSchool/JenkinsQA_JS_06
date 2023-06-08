import MultibranchPipelinePage from "./MultibranchPipelinePage";
import { realHover } from "cypress-real-events/commands/realHover";
import {addSourceItemsList, intervalTimeItemsList, PeriodicallyQstMarkText, PeriodicallyHelpText1} from "../fixtures/pom_fixtures/multibranchPipelineConfigPage.json";
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
    getPeriodicallyPopUpQstMark = () => cy.get('a[title$="otherwise run"]')
    getPeriodicallyHelpText1 = () => cy.get('div[nameref="cb2"] div[class="help"]')
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

    checkPeriodicallyPopUpQstMark() {
        this.getPeriodicallyPopUpQstMark()
            .realHover()
            // .should('have.text', PeriodicallyQstMarkText)
            // .and('be.visible')
        return this;
    }

    clickPeriodicallyPopUpQstMark() {
        this.getPeriodicallyPopUpQstMark()
            .click()
        return this;
    }

    checkPeriodicallyHelpText1Visible() {
        this.getPeriodicallyHelpText1()
        .should('have.text', PeriodicallyHelpText1)
        .and('be.visible')
        return this;
    }

    checkPeriodicallyHelpText1Unvisible() {
        this.getPeriodicallyHelpText1()
        .should('have.text', PeriodicallyHelpText1)
        .and('not.be.visible')
        return this;
    }

    createIntervalDrDwnItemList(){
        return this.getIntervalDrDwnList()
            .should('have.length', intervalTimeItemsList.length)
            .then($els => {
                return Cypress._.map($els, 'innerText')
             })
    }
}

export default MultibranchPipelineConfigurePage;
