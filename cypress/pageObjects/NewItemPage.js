import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";
import MultiConfigurationProjectConfigurePage from "./MultiConfigurationProjectConfigurePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";
import OrgFolderConfigurePage from "./OrgFolderConfigurePage";
import FolderConfigurePage from "./FolderConfigurePage";

class NewItemPage {
    getNewItemNameInputField = () => cy.get('#name');
    getMultibranchPipelineItem = () => cy.get('li[class$="WorkflowMultiBranchProject"]');
    getFreestyleProjectItem = () => cy.get('li[class$="FreeStyleProject"]');
    getNewItemOkBtn = () => cy.get('#ok-button');
    getNewItemNames = () => cy.get('.label');
    getMultiConfigurationProjectItem = () => cy.get(".hudson_matrix_MatrixProject");
    getOrgFolderItem = () => cy.get('.jenkins_branch_OrganizationFolder');
    getFolderItem = () => cy.get('li[class*="folder"]');


    typeNewItemNameInputField(name) {
        this.getNewItemNameInputField().clear().type(name);
        return this;
    };

    selectMultibranchPipelineItem() {
        this.getMultibranchPipelineItem().click();
        return this;
    };

    clickOkBtnAndGoMultiPipelineConfig() {
        this.getNewItemOkBtn().click();
        return new MultibranchPipelineConfigurePage();
    };

    getNewItemNamesList() {
        return this.getNewItemNames().then($els => {
            return Cypress.$.makeArray($els).map($el => $el.innerText)
        });
    };

    selectMultiConfigurationProjectItem() {
        this.getMultiConfigurationProjectItem().click();
        return this;
      }

      clickOkBtnAndGoMultiConfProjectConfig() {
        this.getNewItemOkBtn().click();
        return new MultiConfigurationProjectConfigurePage();
      }
    selectFreestyleProjectItem() {
        this.getFreestyleProjectItem().click();
        return this;
    };

    clickOkBtnAndGoFreestyleProjectConfig() {
        this.getNewItemOkBtn().click();
        return new FreestyleProjectConfigurePage();
    };

    selectOrgFolderItem() {
        this.getOrgFolderItem().click();
        return this;
    };

    clickOkBtnAndGoOrgFolderConfig() {
        this.getNewItemOkBtn().click();
        return new OrgFolderConfigurePage();
    };

    selectFolderItem() {
      this.getFolderItem().click();
      return this;
    };

    clickOkBtnAndGoFolderConfig() {
        this.getNewItemOkBtn().click();
        return new FolderConfigurePage();
    };
};

export default NewItemPage;
