import OrgFolderPage from "./OrgFolderPage"

class OrgFolderConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getEnableDisabledToggle = () => cy.get('.jenkins-toggle-switch__label');
    getOrgFolderDescriptionInputField = () => cy.get('textarea[name="_.description"]');

    clickSaveBtnAndGoOrgFolder() {
        this.getProjectConfigSaveBtn().click();
        return new OrgFolderPage();
    }

    clickEnableDisabledToggle() {
        this.getEnableDisabledToggle().click();
        return this;
    }

    clickOrgFolderDescriptionInputField() {
        this.getOrgFolderDescriptionInputField().click();
        return this
    }

    typeOrgFolderDescriptionInputField(text) {
        this.getOrgFolderDescriptionInputField().type(text);
        return this
    }

    clickSaveBtnAndGoOrgFolder() {
        this.getProjectConfigSaveBtn().click();
        return new OrgFolderPage
    }
}

export default OrgFolderConfigurePage;