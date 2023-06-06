import FolderPage from "./FolderPage";

class FolderConfigurePage {
    getFolderConfigSaveBtn = () => cy.get('button[name=Submit]');

    clickSaveBtnAndGoFolder() {
        this.getFolderConfigSaveBtn().click();
        return new FolderPage();
    };
};

export default FolderConfigurePage;