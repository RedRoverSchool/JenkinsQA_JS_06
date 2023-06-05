import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import HomePage from "./HomePage";

class MultibranchPipelinePage {
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getMultibranchPipelineTitle = () => cy.get('[class="icon-folder icon-xlg"]');
    getJenkinsHeadIcon = () => cy.get('#jenkins-head-icon');


    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new MultibranchPipelineConfigurePage();
    };

    clickJenkinsHeadIcon() {
        this.getJenkinsHeadIcon().click();
        return new HomePage();
    };
}

export default MultibranchPipelinePage;
