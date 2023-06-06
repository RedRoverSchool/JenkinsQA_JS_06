import HomePage from "./HomePage"

class FoldersAndMultibrPipelineDeletePage {
    getSubmitBtn = () => cy.get('button[name="Submit"]');

    clickSubmitBtn() {
        this.getSubmitBtn().click();
        return new HomePage();
    };
}

export default FoldersAndMultibrPipelineDeletePage;