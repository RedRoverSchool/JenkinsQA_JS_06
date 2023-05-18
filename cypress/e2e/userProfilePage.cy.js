/// <reference types="cypress"/>

describe("User Profile Page", () => {
  it("AT_18.01_001 | <Profile Page> Verify user profile name redirect.", function () {
    cy.get("div[class*='login page-header']>a[href^='/user']").then(
      ($element) => {
        const userNameInUrl = $element.attr("href").split("/").pop();
        const userNameOnThePage = $element.text();
        cy.get($element).click();
        cy.url().should("include", `/user/${userNameInUrl}`);
        cy.contains("h1", userNameOnThePage).should("be.visible");
      }
    );
  });
});
