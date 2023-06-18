/// <reference types="cypress"/>

import {header, newPageUrl, text, folder} from '../fixtures/newItemFolderFirst.json'

describe.skip('Jenkins Dashboard', () => {
it('TC_05.04_009 | <New item> Folder', () => {
  cy.get("a[href='/view/all/newJob']").should('have.text', header).click()
  cy.url().should("equal", newPageUrl)
  cy.get('input#name').type(text)
  cy.get(`input[value="com.cloudbees.hudson.plugins.folder.Folder"]+span`).click()
  cy.get('#ok-button').click()
  cy.get('button[name="Submit"]').click()
  cy.get('div[id="main-panel"] h1').should('have.text', folder)
  // cy.get("body > div:nth-child(7) > ol:nth-child(1) > li:nth-child(3) > a:nth-child(1)").should('have.text','testQA')
  })
})  