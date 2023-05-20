/// <reference types = 'cypress'/>

import descriptionsProject from "../fixtures/descriptionsProject.json"

describe('dashboardMainPanelDescription', () => {

    it("AT_02.06_004 | Dashboard > Description input textarea is invisible", () => {
        cy.get("textarea.jenkins-input").should('not.exist')
    })

})

   