import OrgFolderPage from "./OrgFolderPage"

class OrgFolderConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getEnableDisabledToggle = () => cy.get('.jenkins-toggle-switch__label');

    clickSaveBtnAndGoOrgFolder() {
        this.getProjectConfigSaveBtn().click();
        return new OrgFolderPage();
    }

    clickEnableDisabledToggle() {
        this.getEnableDisabledToggle().click();
        return this;
    }
}

export default OrgFolderConfigurePage;