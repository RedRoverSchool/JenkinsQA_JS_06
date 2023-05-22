/// <reference types="cypress"/>

describe("Profile Page", () => {
  let userNameInUrl;
  let userNameOnThePage;

  function getUserNameInUrl() {
    return cy
      .get("div[class*='login page-header']>a[href^='/user']")
      .invoke("attr", "href")
      .then((href) => href.split("/").pop());
  }

  function getUserNameOnThePage() {
    return cy
      .get("div[class*='login page-header']>a[href^='/user']")
      .invoke("text");
  }

  it("AT_18.01_001 | Profile Page | Verify user profile name redirect.", function () {
    getUserNameInUrl().then((nameInUrl) => {
      userNameInUrl = nameInUrl;
      getUserNameOnThePage().then((nameOnPage) => {
        userNameOnThePage = nameOnPage;
        cy.get("div[class*='login page-header']>a[href^='/user']").click();
        cy.url().should("include", `/user/${userNameInUrl}`);
        cy.contains("h1", userNameOnThePage).should("be.visible");
      });
    });
  });
});
