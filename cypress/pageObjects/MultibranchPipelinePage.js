import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import HomePage from "./HomePage";

class MultibranchPipelinePage {
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getMultibranchPipelineTitle = () => cy.get('[class="icon-folder icon-xlg"]');
    getJenkinsHeadIcon = () => cy.get('#jenkins-head-icon');
    getMultibranchPiplineWarning = () => cy.get('#enable-project');
    getEnableButton = () => cy.get('button[formnovalidate]');

    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new MultibranchPipelineConfigurePage();
    };

    clickJenkinsHeadIcon() {
        this.getJenkinsHeadIcon().click();
        return new HomePage();
    };

    trimMultibranchPiplineDisabledText() {
        return this.getMultibranchPiplineWarning().then($el => {
            return $el.text().trimStart();
        });
    };
    
}

export default MultibranchPipelinePage;
