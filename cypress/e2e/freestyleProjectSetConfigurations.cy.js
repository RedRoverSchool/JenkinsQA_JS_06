/// <reference types="cypress"/>

import data from "../fixtures/freestyleBuildConfigurations.json"

describe('freestyleProjectSetConfigurations', () => {
    Cypress.Commands.add("openDashboard", () => {
        cy.get('#breadcrumbBar a').contains('Dashboard').click()
            .then(() => {
                cy.get('body')
                    .then(($body) => {
                        if ($body.find('.dashboard').length) {
                            cy.get('#projectstatus').should('exist');
                        } else {
                            cy.get('h1').should("have.text", "Welcome to Jenkins!");
                        }
                    })
            })
    })
    Cypress.Commands.add('openConfigurationsPage', (projectName) => {
        cy.openDashboard()
            .then(() => {
                cy.get(`#job_${projectName} a`).realHover({position: "center"})
                    .find(".jenkins-menu-dropdown-chevron").should('be.visible').click()
                    .then(() => {
                        cy.get('#breadcrumb-menu span').contains('Configure').should('be.visible').click()
                            .then(() => {
                                cy.get('#general').should("be.visible");
                            })
                    })
            })
    })
    Cypress.Commands.add('openProjectPage', (projectName) => {
        cy.openDashboard();
        cy.get(`#job_${projectName} a span`).contains(`${projectName}`).click();
    })
    Cypress.Commands.add('createProjectWithDefaultSettings', (projectName, projectType) => {
        cy.get('a[href="newJob"] .trailing-icon').click()
            .then(() => {
                cy.get('#name').type(`${projectName}`);
                cy.get('.label').contains(projectType).click();
                cy.get('#ok-button').click()
                    .then(() => {
                        cy.openDashboard()
                            .then(() => {
                                cy.get(`#job_${projectName}`)
                                    .should("have.attr", "class", " job-status-nobuilt")
                                    .should("contain.text", projectName)
                            })
                    })
            });
    });

    const projectEnabled = "#enable-disable-project";
    const description = "textarea[name='description']";
    const discardOldBuildsCheck = "input#cb4";
    const discardOldBuildsLabel = "#cb4 + label";
    const discardOldBuildsDropDown = "div[ref='cb4'] ~ div.form-container.tr[style] select.dropdownList option";
    const strategy = "select.dropdownList option[selected='true']";
    const maxNumberOfBuildsToKeep = "input[name='_.numToKeepStr']";
    const maxNumberOfBuildsToKeepValue = "input[name='_.numToKeepStr']";
    const buildTriggersCheck = "input#cb17";
    const buildTriggersOption = "#cb17 + label";
    const schedule = "textarea[name='_.spec']";
    const addTimestampsCheck = "input[name='hudson-plugins-timestamper-TimestamperBuildWrapper']";
    const buildEnvironmentOption = "span input[name='hudson-plugins-timestamper-TimestamperBuildWrapper'] + label";
    const addBuildStepsButton = "#build-steps + div button";
    const scriptOptions = "#build-steps + .tr .bd";
    const scriptOption = "a.yuimenuitemlabel";
    const buildStepName = ".repeated-chunk .repeated-chunk__header";
    const scriptText = ".CodeMirror-lines div div[style] pre";

    it('AT_12.05_002 | Freestyle project > Configure > Apply configurations changes', () => {
        cy.createProjectWithDefaultSettings(data.projectName, data.projectType)
            .then(() => {
                cy.openConfigurationsPage(data.projectName)
                    .then(() => {
                        cy.get(description).type(data.projectDescription);
                        cy.get(discardOldBuildsLabel).click()
                            .then(() => {
                                cy.get(discardOldBuildsDropDown).should("be.visible")
                                cy.get(maxNumberOfBuildsToKeep).type(data.maxBuilds.toString());
                            })
                    })
                    .then(() => {
                        cy.get(buildTriggersOption).should("be.visible").click();
                        cy.get(schedule).should("be.visible").type(data.schedule);
                    })
                    .then(() => {
                        cy.get('#build-environment').should("be.visible")
                            .then(() => {
                                cy.get(buildEnvironmentOption).contains(data.buildEnvironmentOption)
                                    .should("be.visible")
                                    .click();
                            })
                    })
                    .then(() => {
                        cy.get(addBuildStepsButton).should("be.visible").click();
                        cy.get(scriptOptions).should("be.visible")
                            .then(() => {
                                cy.get(scriptOption).contains(data.scriptOption).click()
                                    .then(() => {
                                        cy.get('.CodeMirror textarea')
                                            .should("be.visible")
                                            .type(data.scriptText, {force: true});
                                    })
                            })
                    })
                    .then(() => {
                        cy.get('button[name="Apply"]').should("be.visible").click()
                            .then(() => {
                                cy.get('#notification-bar span').should('have.text', data.applyConfirmMessage);
                            })
                    })

                    .then(() => {
                        cy.openDashboard();
                        cy.openProjectPage(data.projectName)
                            .then(() => {
                                cy.get('#description div').not('div[class]').should("have.text", data.projectDescription);
                            })
                            .then(() => {
                                cy.openConfigurationsPage(data.projectName)
                                    .then(() => {
                                        cy.get(projectEnabled).should("have.attr", "value", "true");
                                        cy.get(description).should("have.text", data.projectDescription);
                                        cy.get(discardOldBuildsCheck).should('have.attr', 'checked', "checked");
                                        cy.get(strategy).should("have.text", data.strategyOption);
                                        cy.get(maxNumberOfBuildsToKeepValue)
                                            .should("have.attr", "value", data.maxBuilds.toString());
                                        cy.get("#source-code-management").should("be.visible");
                                        cy.get('label[for="radio-block-0"]')
                                            .should("be.visible")
                                            .should("have.text", data.sourceCodeManagement);
                                        cy.get(buildTriggersCheck).should('have.attr', 'checked', "checked");
                                        cy.get(schedule).should("have.text", data.schedule);
                                        cy.get(addTimestampsCheck).should('have.attr', 'checked', "checked");
                                        cy.get(buildStepName).should("contain.text", data.scriptOption);
                                        cy.get(scriptText).should("have.text", data.scriptText);
                                    })
                            })
                    })
            })
    })
})
