/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'

describe('US_12.06 | Freestyle project Disable project', () => {

	it('AT_12.06_001 | Freestyle project "Disable project" option exists', () => {
		// create Freestyle project
		cy.intercept('/view/all/newJob').as('newJobsList')
		cy.intercept(`/job/${projects.freestyle.name}/configure`).as('newProjectConfigure')
		cy.intercept(`/job/${projects.freestyle.name}/`).as('newProjectProfile')
		cy.intercept(`/`).as('dashboard')
		cy.get('a.task-link[href="/view/all/newJob"]').click()
		cy.wait('@newJobsList')
		cy.get('input#name').type(projects.freestyle.name)
		cy.get('.hudson_model_FreeStyleProject').click()
		cy.get('#ok-button').click()
		cy.wait('@newProjectConfigure')
		cy.get('[name="Submit"]').click()
		cy.wait('@newProjectProfile')
		cy.get('.page-headline').should('include.text', projects.freestyle.name)
		cy.contains('a[href="/"]', 'Dashboard').click()
		cy.wait('@dashboard')
		cy.get('table#projectstatus').should('include.text', projects.freestyle.name)
		// steps
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project').find('button[name="Submit"]')
			.should('have.text', 'Disable Project')
			.and('be.visible')
			.and('be.enabled')
	});

})