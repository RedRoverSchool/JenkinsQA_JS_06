import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";

class MultibranchPipelinePage {
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getMultibranchPipelineTitle = () => cy.get('[class="icon-folder icon-xlg"]');


    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new MultibranchPipelineConfigurePage();
    };
}

export default MultibranchPipelinePage;
