/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'
import iconsSML from "../fixtures/iconsSML.json"

describe.skip('dashboardIcons', () => {

    beforeEach('Create a freestyle project', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projects.newProject)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('button#ok-button').click()
        cy.get('button.jenkins-button--primary ').click()
        cy.get('#jenkins-home-link').click()
    });

    it('AT_20.01_003 | Dashboard > Verify table size is L', () => {
        cy.get('[tooltip="Large"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding))
                .should('eq', iconsSML.lRem)
            })
        })
    })

    it('AT_20.01_011 | Dashboard > Verify table size is M', () => {
        cy.get('[tooltip="Medium"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding))
                .should('eq', iconsSML.mRem)
            })
        })
    })

    it('AT_20.01_008 | Dashboard > Verify table size is S', () => {
        cy.get('[tooltip="Small"]').click()
        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue(iconsSML.checkForTablePadding))
                .should('eq', iconsSML.sRem)
            })
        })
    })
})