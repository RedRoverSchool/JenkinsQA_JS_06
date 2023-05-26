/// <reference types='cypress'/>

describe("Add description to a created user", () => {
  beforeEach("Create a user from Manage Jenkins>Manage Users", function () {
    cy.get('a[href="/manage"]').click();
    cy.get('.jenkins-section__item a[href="securityRealm/"]').click();
    cy.get(".jenkins-app-bar__controls").click();
    cy.get("input#username").type("created1");
    cy.get('input[name="password1"]').type("123");
    cy.get('input[name="password2"]').type("123");
    cy.get('input[name="email"]').type("qa@test.com");
    cy.get('button[name="Submit"]').click();
    cy.get("#breadcrumbBar").contains("Dashboard").click();
  });

  it.only("AT_06.02.004 verify the description can be added to a created user", () => {
    cy.get('a[href="/asynchPeople/"]').click();
    cy.get('#person-created1 a[href = "/user/created1/"]').click();
    cy.get("#description div").not("div[class]").should("be.empty");
    cy.get("#description-link").click();
    cy.get("textarea[name='description']").type(
      "Created first time a new description"
    );
    cy.get("button[name='Submit']").click();
    cy.get("#description div")
      .not("div[class]")
      .should("have.text", "Created first time a new description");
  });

  afterEach("Delete created user", function () {
    cy.get('#tasks a[href="/user/created1/delete"]').click();
    cy.get('button[name="Submit"]').click();
  });
});
