import BuildDeletionPage from "./BuildDeletionPage";

class BuildPage {
    getDeleteBuildBtn = () => cy.get('.task:last-child');
    getBuildDescriptionLink = () => cy.get('#description-link');
    getBuildDescriptionInput = () => cy.get('textarea[name="description"]');
    getShowPreviewLink = () => cy.get('a.textarea-show-preview');
    getPreviewTextarea = () => cy.get('div.textarea-preview');
    getSaveDescriptionBtn = () => cy.get("#description button");
    getDescriptionText = () => cy.get("#description div:first-child");
    getBuildName = () => cy.get('.jenkins-icon-adjacent');
    getBuildStartedBy = () => cy.get('table tr td p span');

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

    clickSaveDescriptionBtn() {
    this.getSaveDescriptionBtn().click();
    return this;
  }

    typeBuildNewDescriptionInput(newDescription) {
        this.getBuildDescriptionInput().clear().type(newDescription);
        return this;
    };

    getBuildStartedByText() {
        return this.getBuildStartedBy().should("be.visible")
            .then(($el) => {
                return $el.text();
            })
    }

    getBuildNameText() {
        return this.getBuildName().then($el => {
            return $el.text().split("(").shift().trim();
        })
    }

}

export default BuildPage;
