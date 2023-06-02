import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";

class MultibranchPipelinePage {
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');


    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new MultibranchPipelineConfigurePage();
    };
}

export default MultibranchPipelinePage;
