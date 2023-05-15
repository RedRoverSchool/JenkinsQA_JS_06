/// <reference types="cypress"/>

describe('myViewsEditDescriptionTest', () => {
    const description = 'text'
    const newDescription = 'newText'

    it ('My views Edit Description', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type(description)
        cy.get('.jenkins-button').click()
        cy.get('#description-link').should("have.attr", "href")
        cy.get('#description-link').invoke('attr', 'href').should('eq', 'editDescription')
        cy.get('.jenkins-buttons-row').should('contain', 'Edit description')
    })

    it ('My views Edit Description text is saved', () => {
        cy.contains('My Views').click()
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').clear().type(description)
        cy.get('.jenkins-button').click()
        cy.get('#description div:nth-child(1)').should('have.text', description)
        cy.get('a[href="editDescription"]').click()
        cy.get('.jenkins-input   ').clear().type(newDescription)
        cy.get('.jenkins-button').click()
        cy.get('#description div:nth-child(1)').should('have.text', newDescription)
        cy.get('#description div:nth-child(1)').should('not.have.text', description)
    })

let jobName = "Test1";
it("AT_04.03_006 | Breadcrumbs My Views page Check an opportunity to open a chosen job", () => {
  cy.get('[href="/view/all/newJob"] .task-link-text').click({
    force: true,
  });
  cy.url().should(
    "be.eq",
    `http://localhost:${Cypress.env("local.port")}/view/all/newJob`
  );
  cy.get("#name").click().type(jobName);
  cy.get(".hudson_model_FreeStyleProject .label").click({
    force: true,
  });
  cy.get("#ok-button").click();
  cy.url().should(
    "be.eq",
    `http://localhost:${Cypress.env("local.port")}/job/${jobName}/configure`
  );
  cy.get('[name="Submit"]').click();
  cy.url().should(
    "be.eq",
    `http://localhost:${Cypress.env("local.port")}/job/${jobName}/`
  );
  cy.get(".job-index-headline.page-headline").should(
    "have.text",
    `Project ${jobName}`
  );
  cy.get(`[href="/"].model-link`).click();
  cy.get('[href="/me/my-views"]').click();
  cy.url().should(
    "be.eq",
    `http://localhost:${Cypress.env("local.port")}/me/my-views/view/all/`
  );
  cy.get(`a[href="job/${jobName}/"]`).click();
  cy.url().should(
    "be.eq",
    `http://localhost:${Cypress.env(
      "local.port"
    )}/me/my-views/view/all/job/${jobName}/`
  );
  cy.get(".job-index-headline.page-headline").should(
    "have.text",
    `Project ${jobName}`
  );
});
})