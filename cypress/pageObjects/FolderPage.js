class FolderPage {
    getAddDescriptiotBtn = () => cy.get('#description-link');
    getFolderDescriptionInputField = () => cy.get('textarea[name="description"]');
    getSaveDescriptionBtn = () => cy.get('button[name="Submit"]');
    getFolderDescription = () => cy.get('#description div:first-child');
    getFolderHeader = () => cy.get('#main-panel h1');
    getJobInsideFolderLink = () => cy.get('table td a[href*="job/"]')

    clickAddDescriptionBtn() {
        this.getAddDescriptiotBtn().click();
        return this;
    };

    typeFolderDescription(name) {
        this.getFolderDescriptionInputField().type(name);
        return this;
    };

    saveFolderDescription() {
        this.getSaveDescriptionBtn().click();
        return this;
    };

    checkJobMoveInsideFolder(name) {
        this.getJobInsideFolderLink()
        .should('have.text', name)
        .and('be.visible')
    }

};

export default FolderPage;