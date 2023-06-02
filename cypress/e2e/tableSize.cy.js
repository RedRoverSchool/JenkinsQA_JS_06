/// <reference types="cypress" />
import dashboardIcons from '../fixtures/dashboardIcons.json'
import iconsSML from '../fixtures/iconsSML.json'

describe ('Dashboard Icons S,M,L', ()=> {
    it ('Table size S', ()=> {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project1')
        cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
        cy.get('a[href="/iconSize?16x16"]').contains('S').click()

        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
                .should('eq', '0.2rem')
            })
        })
    })
    it ('20.01_002_DashboardIcons_M', ()=> {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(dashboardIcons.projectName)
        cy.get('li[tabindex="0"] span').contains(dashboardIcons.item).click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
        cy.get('a[href="/iconSize?24x24"]').contains('M').click()

        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
                .should('eq', '0.4rem')
            })
        })
    })
    it ('20.01_009_DashboardIcons_L', ()=> {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(dashboardIcons.projectName)
        cy.get('li[tabindex="0"] span').contains(dashboardIcons.item).click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
        cy.get('.jenkins-icon-size__items-item').contains('L').click()

        cy.get('#projectstatus').then((obj) => {
            cy.document().then(() => {
                cy.wrap(obj).then($el => window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
                .should('eq', '0.55rem')
            })
        })
    })
    Cypress.Commands.add('CreateProject', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type(dashboardIcons.newFreestyleProject)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('.jenkins-button.jenkins-button--primary').click()
        cy.get('#jenkins-home-link').click()
    })

    it('20.01.007|DashbordVerify size of project table S,M,L', function () {
        const sizeButton = ['a[tooltip="Small"]', 'a[tooltip="Medium"]', 'a[tooltip="Large"]']

        cy.CreateProject()
        cy.wrap(sizeButton).as('sizeButton')
        cy.get('@sizeButton').each((locator) => {
            cy.get(locator).click()
            cy.get('#projectstatus').should(($el, index) => {
                const tablePadding = Cypress.$($el).css('--table-padding')
                expect(tablePadding).to.eq(iconsSML.sizeValue[index])
            })
        })
    })
})