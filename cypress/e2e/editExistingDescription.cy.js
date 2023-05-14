/// <reference types="cypress"/>

describe(`Edit description`, function () {
  const description = `text`;
  const newDescription = "new text";

  it(`Edit existing description`, function () {
    cy.contains(`My Views`).click();
    cy.get("#description-link").click();
    cy.get(`.jenkins-input`).type(description);
    cy.get(`.jenkins-button`).click();
    cy.get(`a[href="editDescription"]`).click();
    cy.get(`.jenkins-input`).clear().type(newDescription);
    cy.get(`#description div:nth-child(1)`).should(
      `not.have.text`,
      description
    );
  });
});
