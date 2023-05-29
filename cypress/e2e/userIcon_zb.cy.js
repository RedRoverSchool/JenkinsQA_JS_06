/// <reference types="cypress"/>

describe('Header | User icon', () => {
    
    const expectedDropDownMenuItems = [
        'Builds',
        'Configure',
        'My Views',
        'Credentials',
    ]

    it('AT_01.03_013| <Header> Verify "User Icon" is visible and clickable', () => {
        cy.get('.login > a.model-link').should('exist').click()
        cy.get('#main-panel h1').should('contain', 'admin')
    })

    it('AT_01.03_014| <Header> Verify dropdown menu from "User Icon"', () => {
        cy.get('.login > a.model-link > button').click({ force: true })
        cy.get('#breadcrumb-menu ul>li span')
            .should("have.length", 4).then(($elems) => {
                const element = Cypress.$.makeArray($elems).filter($elem => $elem.innerText == 'Builds')
                return cy.wrap(element)
            }).click()
        cy.get('#breadcrumbBar>ol>li:last-child').should('have.text', 'Builds')
    })

    it('AT_01.03_015| <Header> Verify User Icon is visible and clickable', () => {
        cy.get('.model-link span[class="hidden-xs hidden-sm"]').should('exist').click()
        cy.get('.icon-lg').should('exist')
    })

    it('AT_01.03_017 | <Header>| User icon | Verify contents of the drop-down menu', () => {
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(3)').click({ force: true });
        cy.get('#breadcrumb-menu ul>li span').should('have.length', 4).each(($el, idx) => {
            expect($el.text()).to.be.equal(expectedDropDownMenuItems[idx]);
        })
    })

    it('AT_01.03_016 | <Header> User icon | Verify drop-down menu', () => {
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(3)').click({ force: true });
        cy.get('.first-of-type span').contains('Builds').click();
        cy.get('#breadcrumbs li.jenkins-breadcrumbs__list-item:nth-last-child(1)').should('have.text', 'Builds');
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(3)').click({ force: true });
        cy.get('.first-of-type span').contains('Configure').click();
        cy.get('#breadcrumbs li.jenkins-breadcrumbs__list-item:nth-last-child(1)').should('have.text', 'Configure');
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(3)').click({ force: true });
        cy.get('.first-of-type span').contains('My Views').click();
        cy.get('.jenkins-breadcrumbs__list-item a[href$="my-views/"]').should('have.text', 'My Views');
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(3)').click({ force: true });
        cy.get('.first-of-type span').contains('Credentials').click();
        cy.get('.jenkins-app-bar__content h1').should('have.text', 'Credentials');
    })

    it('AT_01.03.027 | <Header> User icon is visible, clickable, opens a dropdown menu and redirects', () => {
        cy.get('a[href="/user/admin"]').should('be.visible');
        cy.get('button:nth-child(3)').click({force: true});
        cy.get('#breadcrumb-menu').should('be.visible');
        cy.get('a[href="/user/admin/builds"').click();
        cy.get('#main-panel h1').should('have.text', 'Builds for admin');
    });
})


