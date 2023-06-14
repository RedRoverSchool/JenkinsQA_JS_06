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

	it.skip('AT_14.05_001 | Multi-configuration project. Block with advanced options is appeared after clicking "Advanced" button', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').should('be.visible')
		})
	});

	it.skip('AT_14.05_002 | Multi-configuration project. There are 7 advanced project options in the list', () => {
		const optionsNumber = projects.multiConfigurationProject.advancedOptions.length + projects.multiConfigurationProject.advancedOptionsField.length;

		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container')
				.children()
				.should('have.length', optionsNumber)
		})
	});

	it.skip('AT_14.05_003 | Multi-configuration project. Advanced options are enabled to select it', () => {
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

	it.skip('AT_14.05_004 | Multi-configuration project. Advance project options are checked/unchecked', () => {
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

	it('AT_14.05_005 | Multi-configuration project. Advanced project options. Type "number" field is shown if "Quiet period" option is selected', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"][name="hasCustomQuietPeriod"]')
					.check({ force: true })
				cy.contains('.optionalBlock-container', 'Quiet period').within(() => {
					cy.get('input[type="number"][name="quiet_period"]')
						.should('be.visible')
						.and('be.enabled')
				});
			});
		});
	});

	it('AT_14.05_006 | Multi-configuration project. Advanced project options. Type "number" field is shown if "Retry count" option is selected', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"][name="hasCustomScmCheckoutRetryCount"]')
					.check({ force: true })
				cy.contains('.optionalBlock-container', 'Retry Count').within(() => {
					cy.get('input[type="number"][name="scmCheckoutRetryCount"]')
						.should('be.visible')
						.and('be.enabled')
				});
			});
		});
	});

	it('AT_14.05_007 | Multi-configuration project. Advanced project options. Type "text" field is shown if "Use custom workspace" option is selected', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"][name="hasCustomWorkspace"]')
					.check({ force: true })
				cy.contains('.optionalBlock-container', 'Use custom workspace').within(() => {
					cy.get('input[type="text"][name="_.customWorkspace"]')
						.should('be.visible')
						.and('be.enabled')
				});
			});
		});
	});

	it('AT_14.05_008 | Multi-configuration project. Advanced project options. Type "text" field is shown if "Use custom child workspace" option is selected', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"][name="hasChildCustomWorkspace"]')
					.check({ force: true })
				cy.contains('.optionalBlock-container', 'Use custom child workspace').within(() => {
					cy.get('input[type="text"][name="_.childCustomWorkspace"]')
						.should('be.visible')
						.and('be.enabled')
				});
			});
		});
	});

	it.skip('AT_14.05_009 | Multi-configuration project. Advanced project options are set and saved', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"]')
					.check({ force: true }).then(() => {
						cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Quiet period"]["Quiet period"].fieldName)
							.find('input[type="number"][name="quiet_period"]')
							.clear()
							.type(projects.multiConfigurationProject.additionalAdvancedOptionsFields["Quiet period"]["Quiet period"].setValue)
						cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Retry Count"]["SCM checkout retry count"].fieldName)
							.find('input[type="number"][name="scmCheckoutRetryCount"]')
							.clear()
							.type(projects.multiConfigurationProject.additionalAdvancedOptionsFields["Retry Count"]["SCM checkout retry count"].setValue)
						cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom workspace"].Directory.fieldName)
							.find('input[type="text"][name="_.customWorkspace"]')
							.clear()
							.type(projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom workspace"].Directory.setValue)
						cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom child workspace"]["Child Directory"].fieldName)
							.find('input[type="text"][name="_.childCustomWorkspace"]')
							.clear()
							.type(projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom child workspace"]["Child Directory"].setValue, { parseSpecialCharSequences: false })
						cy.contains('.jenkins-form-item', 'Display Name')
							.find('input[type="text"][name="_.displayNameOrNull"]')
							.clear()
							.type('Advanced name')
					});

			});
		});
		cy.contains('button[name="Submit"]', 'Save').click()

		cy.get(`#side-panel .task a[href="/job/${projects.multiConfigurationProject.name}/configure"]`).click()
		cy.wait('@newProjectConfigure')
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"]')
					.should('have.length', projects.multiConfigurationProject.advancedOptions.length)
					.and('be.checked')
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Quiet period"]["Quiet period"].fieldName)
					.find('input[type="number"][name="quiet_period"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Quiet period"]["Quiet period"].setValue)
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Retry Count"]["SCM checkout retry count"].fieldName)
					.find('input[type="number"][name="scmCheckoutRetryCount"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Retry Count"]["SCM checkout retry count"].setValue)
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom workspace"].Directory.fieldName)
					.find('input[type="text"][name="_.customWorkspace"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom workspace"].Directory.setValue)
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom child workspace"]["Child Directory"].fieldName)
					.find('input[type="text"][name="_.childCustomWorkspace"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom child workspace"]["Child Directory"].setValue, { parseSpecialCharSequences: false })
				cy.contains('.jenkins-form-item', 'Display Name')
					.find('input[type="text"][name="_.displayNameOrNull"]')
					.should('have.value', 'Advanced name')
			});
		});
	});

	it.skip('AT_14.05_010 | Multi-configuration project. Advanced project options default values', () => {
		cy.contains('div.jenkins-section', 'Advanced Project Options').within(() => {
			cy.contains('.advanced-button.advancedButton', 'Advanced').click({ force: true })
			cy.get('.dropdownList-container').within(($elem) => {
				cy.wrap($elem)
					.find('input[type="checkbox"]')
					.check({ force: true })
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Quiet period"]["Quiet period"].fieldName)
					.find('input[type="number"][name="quiet_period"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Quiet period"]["Quiet period"].defaultValue)
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Retry Count"]["SCM checkout retry count"].fieldName)
					.find('input[type="number"][name="scmCheckoutRetryCount"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Retry Count"]["SCM checkout retry count"].defaultValue)
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom workspace"].Directory.fieldName)
					.find('input[type="text"][name="_.customWorkspace"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom workspace"].Directory.defaultValue)
				cy.contains('.optionalBlock-container', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom child workspace"]["Child Directory"].fieldName)
					.find('input[type="text"][name="_.childCustomWorkspace"]')
					.should('have.value', projects.multiConfigurationProject.additionalAdvancedOptionsFields["Use custom child workspace"]["Child Directory"].defaultValue)
				cy.contains('.jenkins-form-item', 'Display Name')
					.find('input[type="text"][name="_.displayNameOrNull"]')
					.should('have.value', '')
			});
		});
	});

});
