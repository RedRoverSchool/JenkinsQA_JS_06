import newItemNames from '../fixtures/newItemNames.json'

describe('US_05.08 New Item Names and Icons', () => {
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
})