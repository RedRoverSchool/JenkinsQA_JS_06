/// <reference types="cypress"/>

import projects from '../fixtures/projects.json'

describe('US_12.06 | Freestyle project Disable project', () => {

	beforeEach(() => {
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
	})

	it.skip('AT_12.06_001 | Freestyle project "Disable project" option exists', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		//expected result
		cy.get('form#disable-project')
			.find('button[name="Submit"]')
			.should('have.text', 'Disable Project')
			.and('be.visible')
			.and('be.enabled')
	});

	it.skip('AT_12.06_002 | Freestyle project. "This project is currently disabled" notification appears after clicking "Disable project" button in the project profile', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		//expected result
		cy.get('.warning')
			.should('be.visible')
			.and('include.text', projects.disabledProjectNotify)
	});

	it('AT_12.06_003 | Freestyle project. Project Status is changed to "Disabled" on Dashboard after clicking "Disable project" button', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		//expected result
		cy.contains('a[href="/"]', 'Dashboard').click()
		cy.wait('@dashboard')
		cy.get('table#projectstatus')
			.contains('tr', projects.freestyle.name)
			.find('svg.icon-disabled')
			.should('be.visible')
			.and('have.attr', 'title', 'Disabled')
	});

	it('AT_12.06_004 | Freestyle project. Disable project. "Disabled" status icon has grey color', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		cy.contains('a[href="/"]', 'Dashboard').click()
		cy.wait('@dashboard')
		//expected result
		cy.get('table#projectstatus')
			.contains('tr', projects.freestyle.name)
			.find('svg.icon-disabled')
			.should('be.visible')
			.and('have.css', 'fill', 'rgb(20, 20, 31)')
			.and('have.css', 'color', 'rgb(20, 20, 31)')
			.and('have.css', 'opacity', '0.5')
	});

	it('AT_12.06_005 | Freestyle project. Disable project. "Enable" button appears after the project is disabled', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		//expected result
		cy.get('form#enable-project')
			.find('button[name="Submit"]')
			.should('be.visible')
			.and('have.text', 'Enable')
	});

	it('AT_12.06_006 | Freestyle project. Disable project. "Enable" button has blue color', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		//expected result
		cy.get('form#enable-project')
			.find('button[name="Submit"]')
			.should('have.text', 'Enable')
			.and('be.visible')
			.and(($el) => {
				const win = $el[0].ownerDocument.defaultView // get Window reference from element
				const before = win.getComputedStyle($el[0], 'before') // use getComputedStyle to read the pseudo selector
				const contentValue = before.getPropertyValue('background-color') // read the value of the CSS property
				expect(contentValue).to.eq('rgb(0, 98, 209)') // blue color
			})
	});

	it('AT_12.06_007 | Freestyle project. Disable project. "Enable" button is clickable (not disabled)', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		//expected result
		cy.get('form#enable-project')
			.contains('button[name="Submit"]', 'Enable')
			.should('be.enabled')
	});

	it('AT_12.06_008 | Freestyle project. Disable project. Tooltip with text "Disabled" appears for the status icon of disabled project', () => {
		cy.get(`a[href="job/${projects.freestyle.name}/"]`).click()
		cy.wait('@newProjectProfile')
		cy.get('form#disable-project')
			.contains('button[name="Submit"]', 'Disable Project')
			.click()
		cy.contains('a[href="/"]', 'Dashboard').click()
		cy.wait('@dashboard')
		cy.get('table#projectstatus')
			.contains('tr', projects.freestyle.name)
			.find('svg.icon-disabled')
			.realHover()
		//expected result
		cy.get(`div[data-tippy-root]`)
			.should('be.visible')
			.and('have.text', 'Disabled')
	});

});
