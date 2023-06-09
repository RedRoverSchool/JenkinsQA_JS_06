import BuildDeletionPage from "./BuildDeletionPage";

class BuildPage {
    getDeleteBuildBtn = () => cy.get('.task:last-child');
    getBuildDescriptionLink = () => cy.get('#description-link');
    getBuildDescriptionInput = () => cy.get('textarea[name="description"]');
    getShowPreviewLink = () => cy.get('a.textarea-show-preview');
    getPreviewTextarea = () => cy.get('div.textarea-preview');

    clickDeleteBuildBtn() {
        this.getDeleteBuildBtn().click();
        return new BuildDeletionPage;
    }

    clickBuildDescriptionLink() {
        this.getBuildDescriptionLink().click();
        return this;
    }

    typeBuildDescriptionInput(description) {
        this.getBuildDescriptionInput().type(description);
        return this;
    }

    clickShowPreviewLink() {
        this.getShowPreviewLink().click();
        return this;
    }

    verifyPreviewTextareaNotVisible() {
        this.getPreviewTextarea().should('not.be.visible');
        return this;
    }
}

export default BuildPage;
