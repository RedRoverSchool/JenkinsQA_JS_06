import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getLeftSidePanelBuildStepsBtn = () => cy.get('button[data-section-id="build-steps"]')
    getBuildStepSectionName = () => cy.get('#build-steps.jenkins-section__title')
    getAddBuildStepBtn = () => cy.get('button.hetero-list-add').contains('Add build step')
    getAddBuildStepMenuList = () => cy.get('.config-table .jenkins-section:nth-child(10) li [href]')
    getBuilderWindow = () => cy.get('.repeated-chunk[name="builder"]')
    getBuilderWindowHeader = () => cy.get('.repeated-chunk__header')
    getGitHubProjectCheckbox = () => cy.get('.jenkins-checkbox [name="githubProject"]');
    getProjectUrlInputField = () => cy.get('input[name="_.projectUrlStr"]');
    getSaveBtn = () => cy.get('button[name="Submit"]');
    getDescriptionInputField = () => cy.get('textarea[name="description"]');
    getLeftSideMenuPostBuldActionsBtn = () => cy.get('button[data-section-id="post-build-actions"]');
    getAddPostBuildActionBtn = () => cy.get('button.hetero-list-add').contains('Add post-build action');
    getAddPostBuildActionDropDownMenuItems = () => cy.get('.config-table .jenkins-section:nth-child(11) li .yuimenuitemlabel');
    getPostBuildActionWindow = () => cy.get('[name="publisher"].repeated-chunk'); 
    getPostBuildActionWindowHeader = () => cy.get('.repeated-chunk__header');
    getAdvancedBtn = () => cy.get('div.config-table > .jenkins-form-item--tight > .jenkins-buttons-row > .advancedButton');
    getAdvancedBtnChboxList = () => cy.get('[style="display: block;"] [type="checkbox"]');
    getSidePanelHeader = () => cy.get('#side-panel h1');
    getDiscardOldBuildsLabel = () => cy.get("#cb4 + label");
    getDiscardOldBuildsCheck = () => cy.get('input#cb4');
    getDiscardOldBuildsSection = () => cy.get("div[ref='cb4'] ~ div.form-container.tr[style] select.dropdownList option");
    getMaxNumberOfBuildsToKeepInputField = () => cy.get('input[name="_.numToKeepStr"]');
    getSourceCodeNoneRadioBtn = () =>  cy.get('label[for="radio-block-0"]');
    getBuildTriggersCheck = () => cy.get('input#cb17');
    getBuildTriggersOptionLabel = () => cy.get('#cb17 + label');
    getScheduleInputField = () => cy.get('textarea[name="_.spec"]');
    getBuildEnvironmentSection = () => cy.get('#build-environment');
    getBuildEnvironmentOptions = () => cy.get("#build-environment ~.jenkins-form-item input + label");
    getProjectEnabled = () => cy.get("#enable-disable-project");
    getScriptOptionsDropDown = () => cy.get("#build-steps + .tr .bd");
    getScriptOptions = () => cy.get("a.yuimenuitemlabel");
    getStrategy = () => cy.get("select.dropdownList option[selected='true']");
    getAddTimestampsCheck = () => cy.get("input[name='hudson-plugins-timestamper-TimestamperBuildWrapper']");
    getBuildStepName = () => cy.get(".repeated-chunk .repeated-chunk__header");
    getScriptText = () => cy.get(".CodeMirror-lines div div[style] pre");
    getScriptCodeInputField = () => cy.get('.CodeMirror textarea');
    getApplyBtn = () => cy.get('button[name="Apply"]');
    getNotificationMessage = () => cy.get('#notification-bar span');
    
    clickSaveBtnAndGoFreestyleProject() {
        this.getProjectConfigSaveBtn().click();
        return new FreestyleProjectPage();
    }; 
    clickLeftSidePanelBuildStepsBtn() {
        this.getLeftSidePanelBuildStepsBtn().click()
        return this
    };
    clickAddBuildStepBtn() {
        this.getAddBuildStepBtn().click()
        return this
    };
    selectBuildStepFromMenuListItem(idx) {
        this.getAddBuildStepMenuList().eq(idx).click()
        return this
    };
    
    checkBuilderWindowHeaderName(name) {
        this.getBuilderWindowHeader()
            .should('include.text', name)
        return this
    };

    checkGitHubProjectCheckbox() {
        this.getGitHubProjectCheckbox().check({force: true});
        return this;
    }

    typeProjectUrl(URL) {
        this.getProjectUrlInputField().type(URL);
        return this;
    }

    clickSaveBtnAndGoFreestyleProjectPage() {
        this.getSaveBtn().click();
        return new FreestyleProjectPage();
    }

    typeDescriptionInputField(name) {
        this.getDescriptionInputField().clear().type(name);
        return this;
    };

    clickLeftSideMenuPostBuldActionsBtn() {
        this.getLeftSideMenuPostBuldActionsBtn().click()
        return this
    };
    clickAddPostBuildActionBtn() {
        this.getAddPostBuildActionBtn().click()
        return this
    };
    selectPostBuildActionDropDownMenuItem(idx) {
        this.getAddPostBuildActionDropDownMenuItems().eq(idx).click()
        return this
    };
    checkPostBuildActionWindowHeaderName(name) {
        this.getPostBuildActionWindowHeader()
            .should('include.text', name)
        return this    
    };

    clickAdvancedBtn() {
        this.getAdvancedBtn().click();
        return this;
    }

    checkAdvancedBtnChbox(idx) {
        this.getAdvancedBtnChboxList(idx).check({force : true});
        return this;
    }

    retrievePageHeader() {
        return this.getSidePanelHeader().then($el => {
            return $el.text();
        });
    }

    clickDiscardOldBuildsLabel() {
        this.getDiscardOldBuildsLabel().click();
        return this;
    }

    typeMaxNumberOfBuildsToKeepInputField(maxBuilds) {
        this.getDiscardOldBuildsSection().should("be.visible");
        this.getMaxNumberOfBuildsToKeepInputField().type(maxBuilds.toString());
        return this;
    }

    clickBuildTriggersOptionLabel() {
        this.getBuildTriggersOptionLabel().click();
        return this;
    }

    typeScheduleInputField(schedule) {
        this.getScheduleInputField().should("be.visible").type(schedule);
        return this;
    }

    selectBuildEnvironmentOption(environmentOption) {
        this.getBuildEnvironmentSection().should("be.visible")
        this.getBuildEnvironmentOptions().contains(environmentOption).should("be.visible").click();
        return this;
    }

    selectScriptOption(scriptOption) {
        this.getScriptOptionsDropDown().should("be.visible");
        this.getScriptOptions().contains(scriptOption).click();
        return this;
    }

    typeScriptCodeInputField(scriptText) {
        this.getScriptCodeInputField().should("be.visible").type(scriptText, {force: true});
        return this;
    }

    clickApplyBtn() {
        this.getApplyBtn().should("be.visible").click();
        return this;
    }

    retrieveNotificationMessageText() {
        return this.getNotificationMessage().then($el => {
            return $el.text();
        })
    }
}

export default FreestyleProjectConfigurePage;