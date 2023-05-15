/// <reference types="cypress"/>

describe('US_01.05 | <Header>User configure', () => {
    Cypress.Commands.add('navigateUserConfigurationPage', () => {
        cy.get('.login .model-link').should('be.visible');
        cy.get('#page-header .login a.model-link button.jenkins-menu-dropdown-chevron').click({ force: true });
        cy.get('#breadcrumb-menu li.yuimenuitem a span').contains('Configure').click();
    });
    Cypress.Commands.add('saveDataUserConfigurationPage', (button) => {
        cy.intercept('POST',
            `http://localhost:${Cypress.env('local.port')}/user/admin/configSubmit`)
            .as('saved');
        cy.get(button).click();
        cy.wait(['@saved']);
    });
    const descriptionText = 'Some example description';
    const descriptionField = () =>
        cy.get('#main-panel form[name="config"] div.setting-main')
            .find('textarea[name="_.description"]');
    const saveButton = '#bottom-sticker button[name="Submit"]';
    const applyButton = '#bottom-sticker button.jenkins-button.apply-button';


    it('AT_01.05_001| <Header>User configure menu item', function () {
        cy.navigateUserConfigurationPage().then(() => {
            cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/configure`);
        });
    });
    it('AT_01.05_004| <Header> <User Configure> insert information about user', function () {
        cy.navigateUserConfigurationPage().then(() => {
            descriptionField().should('be.visible');
            descriptionField().type('{selectall}').then(() => {
                descriptionField().type('{del}').then(() => {
                    descriptionField().type(descriptionText).then(() => {
                        cy.saveDataUserConfigurationPage(applyButton);
                        cy.visit(`http://localhost:${Cypress.env('local.port')}/user/admin/`)
                            .then(() => {
                                cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/`);
                                cy.get('#description>div:first-child').invoke('text').should('eq',descriptionText);
                            });
                    });
                });
            });
        });
    });

    it('AT_01.05_005| <Header> <User Configure> delete information about user', function () {
        cy.navigateUserConfigurationPage().then(() => {
            descriptionField().should('be.visible');
            descriptionField().type('{selectall}').then(() => {
                descriptionField().type('{del}').then(() => {
                    cy.saveDataUserConfigurationPage(applyButton);
                    cy.visit(`http://localhost:${Cypress.env('local.port')}/user/admin/`)
                        .then(() => {
                            cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/`);
                            cy.get('#description>div:first-child').invoke('text').should('be.empty');
                        });
                });
            });
        });
    });
});