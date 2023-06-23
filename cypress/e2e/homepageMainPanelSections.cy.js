/// <reference types="cypress"/> 
import { set } from '../fixtures/mainPanel.json'

describe.skip('homePageMainPanelSections', () => {
    it('AT_2.07.002 | Homepage > Main panel should contain 2 sections', () => {
        cy.get('.empty-state-block > section > h2').should('have.length', 2).each(($el, idx) => {
            expect($el.text()).to.be.equal(set[idx]);
        });
    });
});
