import HomePage from "./HomePage";

class MultibranchPipelineDeletePage {
    getSubmitBtn = () => cy.get('button[name="Submit"]');

    clickSubmitBtn() {
        this.getSubmitBtn().click();
        return new HomePage();
    };
}

export default MultibranchPipelineDeletePage;