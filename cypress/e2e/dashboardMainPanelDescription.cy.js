/// <reference types = 'cypress'/>

import descriptionsProject from "../fixtures/descriptionsProject.json"

describe('dashboardMainPanelDescription', () => {

    it("AT_02.06_004| Dashboard > Verification of the button 'Add description'", () => {
        cy.get("a#description-link").click() //find and click the button 'Add description'
        cy.focused().should('have.attr', 'name', 'description') /*assert that the currently focused DOM element 
        is input textarea for adding description located at the main panel of the Dashboard*/
    })

})