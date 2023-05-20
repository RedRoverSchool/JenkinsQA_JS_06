/// <reference types = 'cypress'/>

import descriptionsProject from "../fixtures/descriptionsProject.json"

describe('dashboardMainPanelDescription', () => {

    it("AT_02.06_004 | Dashboard > Description input textarea is invisible", () => {
        cy.get("textarea.jenkins-input").should('not.exist')
    })

    it("AT_02.06_005| Dashboard > Verification of the button 'Add description'", () => {
        cy.get("a#description-link").click() 
        cy.focused().should('have.attr', 'name', 'description') 
    })

})

   