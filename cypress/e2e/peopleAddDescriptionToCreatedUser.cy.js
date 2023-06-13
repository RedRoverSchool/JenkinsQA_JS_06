/// <reference types='cypress'/>

import data from "../fixtures/peopleAddDescription.json"

describe.skip("peopleAddDescriptionToCreatedUser", () => {
  beforeEach("Create a user from Manage Jenkins>Manage Users", function () {
    cy.get('a[href="/manage"]').click();
    cy.get('.jenkins-section__item a[href="securityRealm/"]').click();
    cy.get(".jenkins-app-bar__controls").click();
    cy.get("input#username").type(data.userName);
    cy.get('input[name="password1"]').type(data.password);
    cy.get('input[name="password2"]').type(data.confirmPassword);
    cy.get('input[name="email"]').type(data.emailAddress);
    cy.get('button[name="Submit"]').click();
    cy.get("#breadcrumbBar").contains(data.dashboard).click();
  });

  it("AT_06.02.004 verify the description can be added to a created user", () => {
    cy.get('a[href="/asynchPeople/"]').click();
    cy.get('#person-created1 a[href = "/user/created1/"]').click();
    cy.get("#description div").not("div[class]").should("be.empty");
    cy.get("#description-link").click();
    cy.get("textarea[name='description']").type(data.description);
    cy.get("button[name='Submit']").click();
    cy.get("#description div")
      .not("div[class]")
      .should("have.text", data.description);
  });

  afterEach("Delete created user", function () {
    cy.get('#tasks a[href="/user/created1/delete"]').click();
    cy.get('button[name="Submit"]').click();
  });
});
