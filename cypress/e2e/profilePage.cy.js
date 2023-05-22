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

  it("AT_18.01_002 | Profile Page | Verify Profile Icon on the page", function () {
    cy.get("div[class*='login page-header']>a[href^='/user']").click();
    cy.get("span[class='icon-lg']").should("exist");
  });

  it("AT_18.01_003 | Profile Page | Verify Profile Name on the page", function () {
    getUserNameOnThePage().then((nameOnPage) => {
      const userNameOnThePage = nameOnPage;
      cy.get("div[class*='login page-header']>a[href^='/user']").click();
      cy.get("div[id='main-panel'] h1")
        .should("exist")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(userNameOnThePage);
        });
    });
  });
});
