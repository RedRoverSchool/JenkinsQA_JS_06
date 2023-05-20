import newItemNames from '../fixtures/newItemNames.json';
import pages from '../fixtures/pages.json'

describe('newItem', () => {
    it('TC_05.08_007 Verify item names', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('.j-item-options li span')
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText)
            })
            .should('deep.equal', newItemNames.projectNames)
    })

    it('AT_05.08_005 | <New Item> New Item page displays specified list of items to be created', () => {
        cy.get('a[href= "/view/all/newJob"]').click();
        cy.get('.j-item-options li span')
            .should('have.length', newItemNames.projectNames.length)
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText)
            })
            .should('deep.equal', newItemNames.projectNames)
    })

    it('AT_05.08_004 | <New Item> New Item link goes to New Item page', () => {
        cy.get('.task:nth-child(1) .task-icon-link').should('exist')
        cy.get('.task:nth-child(1) a.task-link')
            .should('exist')
            .and('have.text', 'New Item')
            .and('have.attr', 'href', '/view/all/newJob')
            .click()
        cy.get('div.add-item-name').should('exist');
        cy.url().should('contain', '/view/all/newJob')
    });

    it('AT_05.08_0006 | <New Item> New Item page name in the header', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('head title')
            .should('have.text', pages.newItemPageTitle)
    });

    it('AT_05.08_009 | New item | Verify that page with New Items displayed after click on the button New Item', function () {
        const correctItems = 'Passed';
        const wrongItems = 'Failed';
        
        cy.get('a[href="/view/all/newJob"]')
            .should('have.text', 'New Item')
            .realClick()
        
        cy.url().should('contain', '/view/all/newJob')

        cy.get('.j-item-options li span')
            .then(($els) => {
                const arrayItems = Cypress.$.makeArray($els).map($el => $el.innerText);
                if (arrayItems.toString() != newItemNames.projectNames.toString()) {
                  return wrongItems
                }
                else {
                  return correctItems 
                }
            })
            .should('deep.equal', correctItems)

        cy.get('.icon img').should('be.visible')
    });
})