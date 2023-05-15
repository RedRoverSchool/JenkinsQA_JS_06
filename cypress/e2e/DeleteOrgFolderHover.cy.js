/// <reference types="cypress"/>

const folderName = "Test";
const errorMessage = "Nothing seems to match.";

describe("Organization Folder > Delete Organization Folder", () => {
  it("AT_17.03_003 | Delete Org Folder with hover", function () {
    
    // Create Org Folder
    cy.get('a[href="/view/all/newJob"]').click();

    cy.url().should(
      "eq",
      `http://localhost:${Cypress.env("local.port")}/view/all/newJob`
    );

    cy.get("#name").type(folderName);

    cy.get(".jenkins_branch_OrganizationFolder")
      .contains("Organization Folder")
      .click();

    cy.get("#ok-button").should("be.visible").click();

    cy.url().should(
      "eq",
      `http://localhost:${Cypress.env("local.port")}/job/${folderName}/configure`
    );

    cy.get('button[formnovalidate="formNoValidate"]').click();

    cy.get("#main-panel > h1").should("contain", folderName);

    cy.get("#jenkins-name-icon").click();

    cy.get("#job_Test .jenkins-table__link").should("have.text", folderName);

    // Delete Org Folder
    cy.get(`a[href="job/${folderName}/"]`).realHover();

    cy.get("#projectstatus button.jenkins-menu-dropdown-chevron")
      .should("be.visible")
      .click();

    cy.get(`a[href="/job/${folderName}/delete"]`).click();

    cy.get('[class$="color"]').should("be.visible").click();

    cy.get("#search-box").type(folderName + "{enter}");

    cy.get(".error").should("have.text", errorMessage);
  });
});
