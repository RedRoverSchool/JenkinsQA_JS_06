/// <reference types="cypress"/>
import userDescription from "../fixtures/userDescription.json";
import userConfigure from "../fixtures/userConfigure.json";

const USERNAME = Cypress.env('local.admin.username');

describe("peopleAddDescriptionToUser", () => {

  it.skip("AT 06.02.001 | Verify description is added to user", function () {
    cy.get("a.task-link").eq(1).click();
    cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").clear().type(userDescription.textDescription);
    cy.get("button[name='Submit']").click();
    cy.get('#description div:nth-of-type(1)').should("have.text", userDescription.textDescription);
  });

  it('AT_06.02_003 | Verify save button functionality', () => {
    cy.get(':nth-child(2) > .task-link-wrapper > .task-link').click();
    cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click();
    cy.get('#description-link').click();
    cy.get('.jenkins-input').clear().type(userDescription.newDescription);
    cy.get('.jenkins-button').click();
    cy.get(':nth-child(1) > .task-link-wrapper > .task-link').click();
    cy.get(`a[href*='/user/${USERNAME.toLowerCase()}']`).click();
    cy.get('#description').should('include.text', userDescription.newDescription);

  });
  it.skip("AT_06.02_002 | Verify description is added to a user", function () {
    cy.get("a[href='/asynchPeople/']").click()
    cy.url().should("include", "/asynchPeople/")
    cy.get(".jenkins-table__link").click()
    cy.url().should("include", "/user/")
    cy.get("#description-link").click()
    cy.get("textarea[name='description']").clear().type(userDescription.description)
    cy.get("button[name='Submit']").should("include.text", "Save").click()
    cy.get("#description").should("include.text", userDescription.description)
  })

  it.skip('AT_06.02.009 | People> Verify Possibility to Add Description to a User', () => {
    cy.get('#side-panel [href*=People]').click()
    cy.get(`table#people [href*='${USERNAME}']`).click()
    cy.get('#description-link').click()
    cy.get('.jenkins-input').type(userDescription.textDescription)
    cy.get('button[name=Submit]').click()

    cy.get('#description div:first-of-type').should('include.text', userDescription.textDescription)
  })

  it('AT_06.02.005 | People > Adding a description to a created user', () => {
    cy.get('a[href="/asynchPeople/"]').click()
    cy.get('.jenkins-app-bar__content').should('include.text', userConfigure.SidePanelTasks.Names[0])
    cy.get(`table#people [href="/user/${USERNAME}/"]`).click()
    cy.get('#main-panel h1').should('include.text', `${USERNAME}`)
    cy.get('#description-link').click();
    cy.get('textarea[name = "description"]')
      .clear()
      .type(userDescription.myUserDescription)
    cy.get('button[name="Submit"]').click();
    cy.get('#description div:first-of-type').should('have.text', userDescription.myUserDescription)
  })
});
