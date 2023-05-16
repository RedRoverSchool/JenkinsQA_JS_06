/// <reference types="cypress"/>
import data from "../fixtures/freestyleBuildConfigurations.json"

const createProjectWithDefaultSettings = (projectName, projectType) => {
    cy.get('a[href="newJob"] .trailing-icon').click();
    cy.get('#name').type(`${projectName}`);
    cy.get('.label').contains(projectType).click();
    cy.get('#ok-button').click();
    goToDashboard();
    cy.get(`#job_${projectName}`)
        .should("have.attr", "class", " job-status-nobuilt")
        .should("contain.text", projectName);
    goToConfigurationsPage(data.projectName);
    getProjectEnabled().should("have.attr", "value", "true");
    getSourceCodeManagement().should("have.text", data.sourceCodeManagement);
}

const goToDashboard = () => cy.get('#breadcrumbs a').contains('Dashboard').click();
const goToProjectPage = (projectName) => {
    goToDashboard();
    cy.get(`#job_${data.projectName} a span`).contains(`${projectName}`).click();
}
const goToConfigurationsPage = (projectName) => {
    goToDashboard();
    cy.get(`#job_${projectName} a`).realHover({ position: "center" })
        .get(`#job_${projectName} button`).should('be.visible').click();

    cy.get('#breadcrumb-menu span').contains('Configure').click()
}

const getProjectEnabled = () => cy.get('#enable-disable-project');

const getSourceCodeManagement = () => {
    cy.get("#source-code-management").should("be.visible")
    return cy.get('label[for="radio-block-0"]');
}

const getDescription = () => cy.get('textarea[name="description"]').should("be.visible");

const clickDiscardOldBuilds = () => cy.get('#cb4 + label').contains("Discard old builds").click();

const getDiscardOldBuildsCheck = () => cy.get('input#cb4');

const getMaxNumberOfBuildsToKeep = () => {
    cy.get("div.form-container.tr").should("have.attr", "style", "")
        .get('div[ref="cb4"] ~ div.form-container.tr[style] select.dropdownList option')
        .should("be.visible").should("have.text", data.strategyOption);
    return cy.get('input[name="_.numToKeepStr"]');
}

const getStrategy = () => cy.get('select.dropdownList option[selected="true"]');

const getMaxNumberOfBuildsToKeepValue = () => cy.get('input[name="_.numToKeepStr"]');

const getBuildTriggersOption = (option) => cy.get("#cb17 + label").should("be.visible").contains(option);

const getBuildTriggersCheck = () => cy.get('input#cb17');

const getSchedule = () => cy.get('textarea[name="_.spec"]').should("be.visible");

const getBuildEnvironmentOption = (option) => cy.get('div[ref="cb23"] span.jenkins-checkbox label').should("be.visible");

const getAddTimestampsCheck = () => cy.get('input#cb23');

const getAddBuildSteps = () => cy.get('#build-steps + div button').contains("Add build step").should("be.visible");

const getBuildStepName = () => cy.get('.repeated-chunk .repeated-chunk__header');

const getScriptOption = (option) => cy.get('.bd').should("be.visible").get("a.yuimenuitemlabel").contains(option);

const getScriptTextArea = () => cy.get('.CodeMirror textarea').should("be.visible");

const getScriptText = () => cy.get('.CodeMirror-lines div div[style] pre');

const clickApplyButton = () =>  cy.get('button[name="Apply"]').should("be.visible").click();
const getPopUpNotification = () => cy.get('#notification-bar span');
const getProjectDescription = () => cy.get('#description div').not('div[class]');

describe('Freestyle project, Set configurations', () => {

    beforeEach('Create new freestyle project with default configurations', () => {
        createProjectWithDefaultSettings(data.projectName, data.projectType);
    })

    it('AT_12.05_002 | Apply configurations changes',  () => {
        goToConfigurationsPage(data.projectName);

        getDescription().type(data.projectDescription);
        clickDiscardOldBuilds();
        getMaxNumberOfBuildsToKeep().type(data.maxBuilds.toString());
        getBuildTriggersOption(data.buildTriggers).click();
        getSchedule().type(data.schedule);
        getBuildEnvironmentOption(data.buildEnvironmentOption).click();
        getAddBuildSteps().click();
        getScriptOption(data.scriptOption).click();
        getScriptTextArea().type(data.scriptText, {force: true});
        clickApplyButton();

        getPopUpNotification().should('have.text', data.applyConfirmMessage);

        goToProjectPage(data.projectName);

        getProjectDescription().should("have.text", data.projectDescription);

        goToConfigurationsPage(data.projectName);

        getProjectEnabled().should("have.attr", "value", "true");
        getDescription().should("have.text", data.projectDescription);
        getDiscardOldBuildsCheck().should('have.attr', 'checked', "checked");
        getStrategy().should("have.text", data.strategyOption);
        getMaxNumberOfBuildsToKeepValue().should("have.attr", "value", data.maxBuilds.toString());
        getSourceCodeManagement().should("have.text", data.sourceCodeManagement);
        getBuildTriggersCheck().should('have.attr', 'checked', "checked");
        getSchedule().should("have.text", data.schedule);
        getAddTimestampsCheck().should('have.attr', 'checked', "checked");
        getBuildStepName().should("contain.text", data.scriptOption);
        getScriptText().should("have.text", data.scriptText);
    });
});
