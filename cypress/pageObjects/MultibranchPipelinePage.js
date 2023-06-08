import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";

class MultibranchPipelinePage {
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getMultibranchPipelineTitle = () => cy.get('[class="icon-folder icon-xlg"]');
    getMultibranchPiplineWarning = () => cy.get('#enable-project');
    getEnableButton = () => cy.get('button[formnovalidate]');
    getMultiBranchPipelineHeader = () => cy.get('#main-panel h1');

    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new MultibranchPipelineConfigurePage();
    };

    trimMultibranchPiplineDisabledText() {
        return this.getMultibranchPiplineWarning().then($el => {
            return $el.text().trimStart();
        });
    };
    
}

export default MultibranchPipelinePage;
