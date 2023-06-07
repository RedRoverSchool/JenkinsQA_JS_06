import NewItemPage from "./NewItemPage";

class FolderPage {
    getAddDescriptiotBtn = () => cy.get('#description-link');
    getFolderDescriptionInputField = () => cy.get('textarea[name="description"]');
    getSaveDescriptionBtn = () => cy.get('button[name="Submit"]');
    getFolderDescription = () => cy.get('#description div:first-child');
    getFolderHeader = () => cy.get('#main-panel h1');
    getCreateAJobLink = () => cy.get('a[href="newJob"]')

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

    clickCreateAJobLink() {
        this.getCreateAJobLink().click();
        return new NewItemPage;
    };
};

export default FolderPage;