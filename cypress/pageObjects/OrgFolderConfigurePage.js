import OrgFolderPage from "./OrgFolderPage"

class OrgFolderConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getDisabledToggle = () => cy.get('.jenkins-toggle-switch__label');

    clickSaveBtnAndGoOrgFolder() {
        this.getProjectConfigSaveBtn().click();
        return new OrgFolderPage();
    }

    clickDisabledToggle() {
        this.getDisabledToggle().click();
        return this;
    }
}

export default OrgFolderConfigurePage;