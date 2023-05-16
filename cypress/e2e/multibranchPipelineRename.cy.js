/// <reference types="cypress" />

import pipelineName from "../fixtures/pipelineName.json";
import messages from "../fixtures/messages.json";

describe("multibranchPipelineRename", () => {
  beforeEach(() => {
    cy.get('a[href$="/newJob"]').click();
    cy.get(".jenkins-input").as("nameInputField");
    cy.get("@nameInputField").type(pipelineName.namePipeline);
    cy.get('[class="label"]').contains("Multibranch Pipeline").click();
    cy.get("button[type=submit]").should("be.enabled").click();
    cy.url().should("include", `/${pipelineName.namePipeline}/configure`);
    cy.get("button[name=Submit]").click();
    cy.get('[class="model-link"]').contains("Dashboard").click();
  });

  it("AT_16.02_001 Rename Multibranch Pipeliner using dropdown menu", () => {
    cy.get('a[href^="job/"').realHover();
    cy.get('td > a [class$="dropdown-chevron"]').click();
    cy.get("li > a > span").contains("Rename").click();
    cy.get("@nameInputField").clear();
    cy.get("@nameInputField").type(pipelineName.newNamePipeline);
    cy.get("button[name=Submit]").click();
    cy.url().should("include", `/job/${pipelineName.newNamePipeline}`);
    cy.get("h1").contains(`${pipelineName.newNamePipeline}`);
  });

  it("AT_16.02_002 Rename Multibranch Pipeline using dropdown menu - No change done", () => {
    cy.get('a[href^="job/"').realHover();
    cy.get('td > a [class$="dropdown-chevron"]').click();
    cy.get("li > a > span").contains("Rename").click();
    cy.get("button[name=Submit]").click();
    cy.url().should("include",`/job/${pipelineName.namePipeline}/confirmRename`);
    cy.get("#main-panel h1").should("have.text", messages.renameErrorMessage.error);
    cy.get("#main-panel p").should("have.text", messages.renameErrorMessage.message);
  });

  it("Rename Multibranch Pipeline using dropdown menu entering a valid name", () => {
    cy.get(".jenkins-table td:nth-child(3) span").realHover();
    cy.get("td button.jenkins-menu-dropdown-chevron").click();
    cy.get(".first-of-type > li").contains("Rename").click();
    cy.get('input[name="newName"]').clear().type(pipelineName.newNamePipeline);
    cy.get('button[name="Submit"]').click();
    cy.get("#main-panel h1").should("contain", pipelineName.newNamePipeline);
  });

  it("AT_16.02_003 Rename using drodown menu-Rename with empty name field", () => {
    cy.get('a[href^="job/"').realHover();
    cy.get('td > a [class$="dropdown-chevron"]').click();
    cy.get("li > a > span").contains("Rename").click();
    cy.get("@nameInputField").clear();
    cy.get("button[name=Submit]").click();
    cy.url().should("include", `/job/${pipelineName.namePipeline}/confirmRename`);
    cy.get("#main-panel h1").should("have.text", messages.renameErrorMessage.error);
    cy.get("#main-panel p").should("have.text", messages.renameErrorMessage.emptyNameMsg);
  });

  it("AT_16.02_004 Rename using dropdown menu-Rename using special characters", () => {
    pipelineName.specialCharactersArr.forEach(char => {
        cy.get('a[href^="job/"').realHover();
        cy.get('td > a [class$="dropdown-chevron"]').click();
        cy.get("li > a > span").contains("Rename").click();
        cy.get("@nameInputField").type(char);
        cy.get("button[name=Submit]").click();
        cy.url().should("include", `/job/${pipelineName.namePipeline}/confirmRename`);
        cy.get("#main-panel h1").should("have.text", messages.renameErrorMessage.error);
        if(char == "&") {
            cy.get("#main-panel p")
              .should("contain", `${char}amp;`).and("contain", messages.renameErrorMessage.specialCharactersMsg);
        } else {
            cy.get("#main-panel p")
            .should("contain", char).and("contain", messages.renameErrorMessage.specialCharactersMsg);
        }
        cy.get('a.model-link').contains('Dashboard').click();
    })    
  })
});
