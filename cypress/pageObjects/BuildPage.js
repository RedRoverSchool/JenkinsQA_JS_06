import BuildDeletionPage from "./BuildDeletionPage";

class BuildPage {
    getDeleteBuildBtn = () => cy.get('.task:last-child');

    clickDeleteBuildBtn() {
        this.getDeleteBuildBtn().click();
        return new BuildDeletionPage;
    }

}

export default BuildPage;
