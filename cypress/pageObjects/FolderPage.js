import NewItemPage from "./NewItemPage";
import HomePage from "./HomePage";
import FoldersAndMultibrPipelineDeletePage from "./FoldersAndMultibrPipelineDeletePage";
import FolderConfirmRenamePage from "./FolderConfirmRenamePage";

class FolderPage {
    getAddEditDescriptiotBtn = () => cy.get('#description-link');
    getFolderDescriptionInputField = () => cy.get('textarea[name="description"]');
    getSaveDescriptionBtn = () => cy.get('button[name="Submit"]');
    getFolderDescription = () => cy.get('#description div:first-child');
    getFolderHeader = () => cy.get('#main-panel h1');
    getJobInsideFolderLink = () => cy.get('table td a[href*="job/"]');
    getCreateAJobLink = () => cy.get('a[href="newJob"]')
    getDeleteFolderBtn = () => cy.get('a[href$="/delete"]')
    getRenameFolderLink = () => cy.get('a[href$=confirm-rename]')
    getIconProject = () => cy.get('.icon-pipeline-multibranch-project')
    getDescriptionPreviewLink = () => cy.get(".textarea-show-preview");
    getDescriptionPreview = () => cy.get(".textarea-preview");
    
    clickAddEditDescriptionBtn() {
        this.getAddEditDescriptiotBtn().click();
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
        .and('be.visible');
    };

    clickCreateAJobLink() {
        this.getCreateAJobLink().click();
        return new NewItemPage;
    };

    typeFolderNewDescription(name) {
        this.getFolderDescriptionInputField().clear().type(name);
        return this;
    };

    clickDeleteFolderBtn() {
        this.getDeleteFolderBtn().click();
        return new FoldersAndMultibrPipelineDeletePage;
    };
    
    clickRenameFolderLink() {
        this.getRenameFolderLink().click();
        return new FolderConfirmRenamePage;
    }

    trimFolderHeaderName() {
        
        return this.getFolderHeader().then($el => {
            return $el.text().trim();
        });
    };

    clickDescriptionPreviewLink() {
        this.getDescriptionPreviewLink().click();
        return this;
    }
};

export default FolderPage;
