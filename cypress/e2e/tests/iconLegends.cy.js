/// <reference types = "cypress"/>
import HomePage from '../../pageObjects/HomePage'
import BuildHistoryPage from '../../pageObjects/BuildHistoryPage'
import IconLegendsPage from '../../pageObjects/IconLegendsPage'

import iconLegendsData from '../../fixtures/pom_fixtures/iconLegends.json'

describe('iconLegends', () => {
    const homePage = new HomePage();
    const buildHistory = new BuildHistoryPage();
    const iconLegends = new IconLegendsPage();

    it('AT_20.05_003 | Icon legend`s quantity by groups', () => {
        homePage.clickBuildHistoryLink();
        buildHistory.clickIconLegendsButton();
        
        iconLegends
            .getStatusIconsGroup()
            .should('have.length', iconLegendsData.statusDescriptions.length);
        iconLegends
            .getProjectHealthIconsGroup()
            .should('have.length', iconLegendsData.projectHealthDescriptions.length)
    })

    it("AT_20.05.005 | Verify User is able to see Project Health statuses", function () {
        homePage.clickBuildHistoryLink();
        buildHistory.clickIconLegendsButton();

        iconLegends
            .getProjectHealthGroupHeader()
            .should("be.visible")
            .and("have.text", iconLegendsData.headers[1]);

        iconLegends.getProjectHealthStatuses().each(($el, idx) => {
            cy.wrap($el)
                .invoke("text")
                .then((text) => {
                    expect(text.trim()).to.includes(
                        iconLegendsData.projectHealthDescriptions[idx]
                    );
                });
        });
    });
});