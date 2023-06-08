/// <reference types = "cypress"/>
import HomePage from '../../pageObjects/HomePage'
import BuildHistory from '../../pageObjects/BuildHistoryPage'
import IconLegends from '../../pageObjects/IconLegends'

import iconLegendsContent from '../../fixtures/pom_fixtures/iconLegends.json'

describe('AT_22.01.001 | iconLegends', () => {
    const homePage = new HomePage;
    const buildHistory = new BuildHistory;
    const iconLegends = new IconLegends;

    it('AT_22.01_001 | Icon legend`s quantity by groups', () => {
        homePage.clickBuildHistoryLink();
        buildHistory.clickIconLegendsButton();
        
        iconLegends
            .getStatusIconsGroup()
            .should('have.length', iconLegendsContent.statusDescriptions.length);
        iconLegends
            .getProjectHealthIconsGroup()
            .should('have.length', iconLegendsContent.projectHealthDescriptions.length)
    })
})