import MultiConfigurationProjectPage from "./MultiConfigurationProjectPage";
import projectData from "../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json"

class MultiConfigurationProjectConfigurePage {
  getSaveButton = () => cy.get("button[name='Submit']");
  getAdvancedBtn = () => cy.get('#advanced-project-options+div button');  
  getQuietPeriodCheckBox = () => cy.get('#cb9+.attach-previous');
  getNumberOfSecondsText = () => cy.get('div[class="form-container tr"] .jenkins-form-description');
  getNumberOfSecondsInput = () => cy.get('div[class="form-container tr"] .jenkins-input');
  getQuietPeriodText = () => cy.get('div[ref="cb9"]~div[class="form-container tr"] .jenkins-form-label')
  getRetryCountCheckBox = () => cy.get('#cb10+.attach-previous');
  getSCMCheckoutRetryCountText = () => cy.get('div[ref="cb10"]~div[class="form-container tr"] .jenkins-form-label');
  getRetryCountInput = () => cy.get('div[ref="cb10"]~div[class="form-container tr"] .setting-main input');
  getBlockBuildWhenUpstreamPrIsBldCheckBox = () => cy.get('#cd11');
  getBlockBuildWhenUpstreamPrIsBldText = () => cy.get('#cb11+label');
  getBlockBuildWhenDownstreamPrIsBldCheckBox = () => cy.get('#cb12');
  getBlockBuildWhenDownstreamPrIsBldText = () => cy.get('#cb12+label');
  getUseCustomWorkspaceCheckBox = () => cy.get('#cb13');
  getUseCustomWorkspaceText = () => cy.get('#cb13+label');
  getUseCustomChildWorkspaceCheckBox = () => cy.get('#cb14');
  getUseCustomChildWorkspaceText = () => cy.get('#cb14+label');
  getChildDirectoryText = () => cy.get('div[ref="cb14"]~div[class="form-container tr"] .jenkins-form-label');
  getUseCustomChildWorkspaceInput = () => cy.get('div[ref="cb14"]~div[class="form-container tr"] input');
  getDisplayNameText = () => cy.get('div[class^="tbody"] div[class^="optionalBlock"]:nth-child(6)+div .jenkins-form-label');
  getDisplayNameInput = () => cy.get('div[class^="tbody"] div[class^="optionalBlock"]:nth-child(6)+div input');
  getAdvancedOptionsLabels = () => cy.get('#advanced-project-options~.tbody label.attach-previous');
  getMultiConfigForm = () => cy.document().its('forms.config.elements');
  getAdvancedOptionsCheckboxes = () => cy.get('#advanced-project-options~.tbody').find('input[type="checkbox"]');
  getAdvancedOptionsBlock = () => cy.get('div+div[class="tbody dropdownList-container"]');

  clickSaveButton() {
    this.getSaveButton().click();
    return new MultiConfigurationProjectPage();
  }

  clickAdvancedBtn() {
    this.getAdvancedBtn().click();
    return this;
  }

  clickQuietPeriodCheckBox() {
    this.getQuietPeriodCheckBox().click();
    return this;
  }

  clickRetryCountCheckBox() {
    this.getRetryCountCheckBox().click();
    return this;
  }

  clickBlockBuildWhenUpstreamPrIsBldCheckBox() {
    this.getBlockBuildWhenUpstreamPrIsBldCheckBox().click();
    return this;
  }

  clickBlockBuildWhenDownstreamPrIsBldCheckBox() {
    this.getBlockBuildWhenDownstreamPrIsBldCheckBox().click();
    return this;
  }  

  clickUseCustomWorkspaceCheckBox() {
    this.getUseCustomWorkspaceCheckBox().click();
    return this;
  }

  clickUseCustomChildWorkspaceCheckBox() {
    this.getUseCustomChildWorkspaceCheckBox().click();
  }

  clickAdvancedOptionsLabels() {
    this.getAdvancedOptionsLabels().click({multiple:true});
    return this;
  };

  fillAdvancedOptionsForms() {
    this.getMultiConfigForm()
    .then((elements) => {
      elements['quiet_period'].value = projectData.advancedProjectOptionsFields.QuietPeriod.setValue
      elements['scmCheckoutRetryCount'].value = projectData.advancedProjectOptionsFields.RetryCount.SCMCheckoutRetryCount.setValue
      elements['_.customWorkspace'].value = projectData.advancedProjectOptionsFields.UseCustomWorkspace.Directory.setValue
      elements['_.childCustomWorkspace'].value = projectData.advancedProjectOptionsFields.UseCustomChildWorkspace.ChildDirectory.setValue
      elements['_.displayNameOrNull'].value = projectData.advancedProjectOptionsFields.DisplayName.setValue
      }) 
      return this;
  };

  createAdvancedOptionsValuesList() {
    return this.getMultiConfigForm()
    .then((elements) => { return Cypress._.map([
      elements['quiet_period'],
      elements['scmCheckoutRetryCount'],
      elements['_.customWorkspace'],
      elements['_.childCustomWorkspace'],
      elements['_.displayNameOrNull']], 'value')
      }) 
  };

  createAdvancedOptionsCheckboxesList() {
    this.getAdvancedOptionsCheckboxes()
        .should('be.checked');
    return this;
  };
}
export default MultiConfigurationProjectConfigurePage;
