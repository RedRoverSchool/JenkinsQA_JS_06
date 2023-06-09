class BuildDeletionPage {
    getConfirmDeleteBtn = () => cy.get('button[name=Submit]');

    clickConfirmDeleteBtn() {
        this.getConfirmDeleteBtn().click();
        return this;
    }
}

export default BuildDeletionPage;
