/// <reference types="cypress"/>

describe('Header User Configure', () => {
    it('AT_01.05_004| <Header> <User Configure> delete information about user', function () {
        const descriptionField = () =>
            cy.get('#main-panel form[name="config"] div.setting-main')
                .find('textarea[name="_.description"]');
        Cypress.Commands.add('navigateUserConfigurationPage', () => {
            cy.get('.login .model-link').should('be.visible');
            cy.get('#page-header .login a.model-link button.jenkins-menu-dropdown-chevron').click({ force: true });
            cy.get('#breadcrumb-menu li.yuimenuitem a span').contains('Configure').click();
            cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/configure`)
        });
        Cypress.Commands.add('deleteDescription', button => {
            cy.navigateUserConfigurationPage().then(() => {

                descriptionField().should('be.visible');
                descriptionField().invoke('val').then(oDesc => {
                    descriptionField().type('{selectall}');
                    descriptionField().type('{del}');
                    cy.intercept('POST',
                        `http://localhost:${Cypress.env('local.port')}/user/admin/configSubmit`)
                        .as('saved');
                    cy.get(button).click();
                    cy.wait(['@saved']);

                    cy.visit(`http://localhost:${Cypress.env('local.port')}/user/admin/`)
                        .then(() => {
                            cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/`);

                            cy.get('#description>div:first-child').invoke('text').should('be.empty');
                        });
                    if (oDesc) {
                        cy.navigateUserConfigurationPage().then(() => {
                            descriptionField().type('{selectall}');
                            descriptionField().type(oDesc);
                            cy.get(button).click();
                        });

                    }
                });

            });
        });
        cy.deleteDescription('#bottom-sticker button.jenkins-button.apply-button').then(() => {
            cy.deleteDescription('#bottom-sticker button[name="Submit"]');

        });
    });

})