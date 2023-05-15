/// <reference types="cypress"/>

describe('New Item', () => {
    it('AT_05.08_005 | <New Item> New Item page displays specified list of item names to be created', () => {
        const itemList = ['Freestyle project', 'Pipeline', 'Multi-configuration project', 'Folder', 'Multibranch Pipeline', 'Organization Folder', ];
 
        cy.get('a[href= "/view/all/newJob"]').click();
        cy.get('.j-item-options li span')
            .should('have.length', itemList.length)
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText)
                // cy.log(Cypress.$.makeArray($els).map($el => $el.innerText))
                }            
            )
            .should('deep.equal', itemList)
    })    
});