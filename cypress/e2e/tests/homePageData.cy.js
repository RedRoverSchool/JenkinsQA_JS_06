/// <reference types="cypress" />

import HomePage from '../../pageObjects/HomePage'
import homePage from '../../fixtures/pom_fixtures/homePage.json'


describe('homepage', () => {

    const homepage = new HomePage()

    it('AT_02.06_001 | Homepage (Dashboard) > Add main panel description', () => {
        homepage
            .clickAddDescriptionLink()
            .typeDescriptionIntoField(homePage.descriptionText)
            .clickSaveDescriptionBtn()
            .getSavedDescriptionField()
            .should('contain', homePage.descriptionText)
    })
})