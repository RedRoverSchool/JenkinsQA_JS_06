/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";

describe('newItem', () => {

    const homePage = new HomePage();

    it('[RF] | POM > AT_05.08.011 | Verify Items Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemNamesList()
            .should('deep.equal', newItemPage.newItemNames);
    });
});
