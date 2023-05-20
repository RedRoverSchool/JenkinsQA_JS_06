/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'

describe('Multi Config Project Advanced Options', () => {

	beforeEach(() => {
		// Create Multi-configuration Project
		cy.intercept('/view/all/newJob').as('newJobsList')
		cy.intercept(`/job/${projects.multiConfigurationProject.name}/configure`).as('newProjectConfigure')
		cy.intercept(`/job/${projects.multiConfigurationProject.name}/`).as('newProjectProfile')
		cy.intercept(`/`).as('dashboard')
		cy.get('a.task-link[href="/view/all/newJob"]').click()
		cy.wait('@newJobsList')
		cy.get('input#name').type(projects.multiConfigurationProject.name)
		cy.get('.hudson_matrix_MatrixProject').click()
		cy.get('#ok-button').click()
		cy.wait('@newProjectConfigure')
		cy.get('[name="Submit"]').click()
		cy.wait('@newProjectProfile')
		cy.get('.page-headline').should('include.text', projects.multiConfigurationProject.name)
		cy.contains('a[href="/"]', 'Dashboard').click()
		cy.wait('@dashboard')
		cy.get('table#projectstatus').should('include.text', projects.multiConfigurationProject.name)
		// Open Multi-configuration Project configuration interface
		cy.get(`a[href="job/${projects.multiConfigurationProject.name}/"]`).realHover()
		cy.get(`a[href="job/${projects.multiConfigurationProject.name}/"] button.jenkins-menu-dropdown-chevron`).click()
		cy.get('#breadcrumb-menu')
			.contains('a', 'Configure')
			.click()
		cy.wait('@newProjectConfigure')
	})

	it('AT_14.05_001 | Multi-configuration project. Block with advanced options is appeared after clicking "Advanced" button', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').should('be.visible')
		})
	});

});