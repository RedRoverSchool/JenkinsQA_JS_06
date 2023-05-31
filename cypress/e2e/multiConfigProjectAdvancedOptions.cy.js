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
	});

	it('AT_14.05_001 | Multi-configuration project. Block with advanced options is appeared after clicking "Advanced" button', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').should('be.visible')
		})
	});

	it('AT_14.05_002 | Multi-configuration project. There are 7 advanced project options in the list', () => {
		const optionsNumber = projects.multiConfigurationProject.advancedOptions.length + projects.multiConfigurationProject.advancedOptionsField.length;

		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container')
				.children()
				.should('have.length', optionsNumber)
		})
	});

	it('AT_14.05_003 | Multi-configuration project. Advanced options are enabled to select it', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"]')
					.should('be.visible')
					.and('be.enabled')
				cy.wrap($elem)
					.find('input[name="_.displayNameOrNull"]')
					.should('be.visible')
					.and('be.enabled')
			})
		})
	});

	it('AT_14.05_004 | Multi-configuration project. Advance project options are checked/unchecked', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"]')
					.check({ force: true })
					.should('be.checked')
					.uncheck({ force: true })
					.should('be.not.checked')
			});
		});
	});

});
