/// <reference types = "cypress"/>
import HomePage from '../../pageObjects/HomePage'
import BuildHistoryPage from '../../pageObjects/BuildHistoryPage'
import IconLegendsPage from '../../pageObjects/IconLegendsPage'

import iconLegendsData from '../../fixtures/pom_fixtures/iconLegends.json'

describe('iconLegends', () => {
    const homePage = new HomePage;
    const buildHistory = new BuildHistoryPage;
    const iconLegends = new IconLegendsPage;

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
})