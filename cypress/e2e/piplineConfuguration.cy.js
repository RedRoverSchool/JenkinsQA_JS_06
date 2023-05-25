import items from "../fixtures/items.json";

describe('Multibranch Pipeline Configuration', function () {
    const newPipelineName = 'pipeline' + Date.now()
    const description = 'description' + Date.now()
    const displayName = 'displayName' + Date.now()
    const addSourse = ["Git", "GitHub", "Single repository & branch"]

    function createMultibranchPipeline(pipelineName) {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type(pipelineName);
        cy.contains('Multibranch Pipeline').click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
    }

    beforeEach('Create multibranch pipeline', function () {

        createMultibranchPipeline(newPipelineName)
    })

    it('test1', function () {
        cy.get('a[href="./configure"]').click();
        cy.get('input[name="_.displayNameOrNull"]').type(displayName)
        cy.get('textarea[name="_.description"]').type(description)
        cy.get('#yui-gen1-button').realHover().click()
        // cy.get('ul.first-of-type').should('have.length', 3).then($els =>{
        //        const item = Cypress.$.makeArray($els).filter($el => $el.innerText == 'GitHub');
        //        return cy.wrap(item)
        //       }).click({force:true})
        // cy.get('ul.first-of-type')
        //     .each(($el, idx) => {
        //         expect($el.text()).to.be.equal(addSourse[idx]);
        //     })
        // cy.get('#yui-gen7 > .yuimenuitemlabel').click()
        cy.get('#yui-gen2 li').should('have.length', 3).then($els =>{
                   const item = Cypress.$.makeArray($els).filter($el => $el.innerText == 'GitHub');
                   return cy.wrap(item)
                  }).click({force:true})
    })
})