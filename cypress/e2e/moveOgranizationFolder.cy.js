/// <reference types="cypress"/

import names from "../fixtures/create2folders.json"

beforeEach('create2folders', function () {

  cy.get('[href="/view/all/newJob"]').click()
  cy.get('#name').type(names.orgFolderName)
  cy.contains('Organization Folder').click()
  cy.get('#ok-button').click()
  cy.get('[name="Submit"]').click()
  cy.get('#jenkins-home-link ').click();
  cy.get('[href="/view/all/newJob"]').click()
  cy.get('.com_cloudbees_hudson_plugins_folder_Folder ').click()
  cy.get('#name').type(names.folderName)
  cy.get('#ok-button').click()
  cy.get('#jenkins-home-link').click();
})

describe('Move Organization Folder', () => {
    it('AT_17.04.003 | Move Organization Folder', function () {
      cy.get('.jenkins-table__link').contains(names.orgFolderName).realHover();
      cy.get('[href="job/OrgFolder/"]').click();
      cy.contains('Move').click()
      cy.get('[name="destination"]').realHover().select('/Folder');
      cy.get('.jenkins-button[name="Submit"]').click();
      cy.get ('.model-link[href="/job/Folder/"]').click();
      cy.get('[href="job/OrgFolder/"]').should('exist')
      cy.get('#jenkins-home-link').click();
      cy.get('[href="job/OrgFolder/"]').should('not.exist');

    });
    });