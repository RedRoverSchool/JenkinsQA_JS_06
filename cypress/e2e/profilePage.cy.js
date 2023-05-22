/// <reference types="cypress"/>

const USERNAME = Cypress.env('local.admin.username');

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

  it('AT_18.01_005| Verify access to user ID and status though user’s profile page', () => {
      cy.get('div[class^="login page-header"]>a[href^="/user"]').click()
      cy.url().should('include', `${USERNAME}`)
      cy.get('.icon-lg').should('exist')
      cy.get('a[class="model-link"] span[class="hidden-xs hidden-sm"]').then((el) => {
      let fullName = el.text()
      cy.title().should('exist').and('contain', `${fullName}`)
      })
      cy.get('#tasks>:nth-child(2)').should('exist')
      cy.get('#main-panel>div:last-child').should('contain', `${USERNAME}`)
  })
});
